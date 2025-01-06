import { useState, useEffect } from "react";
import "./App.css";
import {
  signIn,
  createAccount,
  googleSignIn,
  signOutUser,
  updateUserProfile,
  observeAuthState,
  filterPosts,
} from "./firebaseFiles/auth";
import {
  addPost,
  deletePost,
  updatePost,
} from "./firebaseFiles/firestore";
import LoggedInView from "./components/LoggedInView";
import LoggedOutView from "./components/LoggedOutView";
import {
  handleChange,
  handleMoodClick,
  resetMoodSelectValue,
  displayFormatedDate,
  replaceNewLines,
  toggleState,
} from "./utils";

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    photoURL: "./images/default-profile-picture.jpeg",
    errorMessage: "",
    successMessage: "",
  });

  const [posts, setPosts] = useState([]);


  const [selectedMood, setSelectedMood] = useState("");

  const [newPost, setNewPost] = useState({
    body: ""
  });

  const [editingPost, setEditingPost] = useState({
    show: false,
    id: "",
    body: "",
  });

  const [updatedUser, setUpdatedUser] = useState({
    name: "",
    photoURL: "",
  });

  const [mood, setMood] = useState([
    {
      name: "Awful",
      imgUrl: "./emojis/1.png",
      id: "mood-1",
      selected: "",
    },
    {
      name: "Bad",
      imgUrl: "./emojis/2.png",
      id: "mood-2",
      selected: "",
    },
    {
      name: "Meh",
      imgUrl: "./emojis/3.png",
      id: "mood-3",
      selected: "",
    },
    {
      name: "Good",
      imgUrl: "./emojis/4.png",
      id: "mood-4",
      selected: "",
    },
    {
      name: "Amazing",
      imgUrl: "./emojis/5.png",
      id: "mood-5",
      selected: "",
    },
  ]);



  const [filterBtns, setFilterBtns] = useState(
    JSON.parse(localStorage.getItem("filterBtns")) || [
      {
        id: "today-filter-btn",
        value: "Today",
        selected: "",
      },
      {
        id: "week-filter-btn",
        value: "Week",
        selected: "",
      },
      {
        id: "month-filter-btn",
        value: "Month",
        selected: "",
      },
      {
        id: "all-filter-btn",
        value: "All",
        selected: "",
      },
    ]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Observe auth state when the app mounts and fetch posts in realtime
  useEffect(() => {
    const unsubscribe = observeAuthState(setUser, setIsLoggedIn, setPosts, setFilterBtns, filterBtns);
    return unsubscribe;
  }, []);

  // SAVE FILTER BTN TO LOCALSTORAE
  useEffect(() => {
    localStorage.setItem("filterBtns", JSON.stringify(filterBtns));
  }, [filterBtns]);

  // Handlers
  const handleSignIn = async (e) => {
    e.preventDefault();
    await signIn(user, setUser);
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    await createAccount(user, setUser);
  };

  const handleSignOut = () => {
    signOutUser(setUser);
    setUpdatedUser({ name: "", photoURL: "" });
  };

  const handleGoogleSignIn = async () => {
    await googleSignIn(setUser);
  };

  const handleUpdateProfile = () => {
    updateUserProfile(setUser, updatedUser);
    setUpdatedUser({ name: "", photoURL: "" });
  };

  // FIRESTORE FUNCTIONS
  const handleAddPost = async () => {
    await addPost(newPost, setNewPost, selectedMood);
    resetMoodSelectValue(setMood, setSelectedMood);
  };

  const handleDeletePost = async (postId) => {
    await deletePost(postId);
  };

  const handleUpdatePost = async () => {
    if (!editingPost.id) return;
    await updatePost(editingPost.id, editingPost.body);
    updateEditingPost(" ", " ");
  };

  const updateEditingPost = (id, body) => {
    toggleState(setEditingPost, "show");
    setEditingPost(prevState => ({
      ...prevState,
      id: id,
      body: body
    }))
  };

  const handleFilterBtnClick = (e, setFilterBtns) => {
    filterPosts(e.target.id, setFilterBtns, setPosts);
  };


  // RENDER

  return (
    <main id="App">
      {isLoggedIn ? (
        <LoggedInView
          user={user}
          onSignOut={handleSignOut}
          updatedUser={updatedUser}
          handleUpdateProfile={handleUpdateProfile}
          handleUpdateProfileChange={(e) => handleChange(e, setUpdatedUser)}
          handleNewPostChange={(e) => handleChange(e, setNewPost)}
          handleAddPost={handleAddPost}
          handleDeletePost={handleDeletePost}
          handleUpdatePost={handleUpdatePost}
          handleUpdatePostChange={(e) => handleChange(e, setEditingPost)}
          newPost={newPost}
          posts={posts}
          editingPost={editingPost}
          updateEditingPost={updateEditingPost}
          mood={mood}
          handleMoodClick={(e) => handleMoodClick(e, setMood, setSelectedMood, selectedMood)}
          displayFormatedDate={displayFormatedDate}
          replaceNewLines={replaceNewLines}
          filterBtns={filterBtns}
          handleFilterBtnClick={(e) => handleFilterBtnClick(e, setFilterBtns)}
        />
      ) : (
        <LoggedOutView
          onGoogleSignIn={handleGoogleSignIn}
          user={user}
          handleSignIn={handleSignIn}
          handleCreateAccount={handleCreateAccount}
          handleChange={(e) => handleChange(e, setUser)}
        />
      )}
    </main>
  );
}

export default App;

