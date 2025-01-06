import {
  postsCollection,
  auth,
} from "./firebase";
import {
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  onSnapshot,
  serverTimestamp,
  query,
  where,
  orderBy,
} from "firebase/firestore";

// Add Post
const addPost = async (newPost, setNewPost, selectedMood) => {
  if (!newPost.body.trim() || !selectedMood) {
    alert("Write about your feelling and select your mood emoji")
    return
  };
  console.log(selectedMood)
  const user = auth.currentUser;

  try {
    await addDoc(postsCollection, {
      ...newPost,
      uid: user.uid,
      createdAt: serverTimestamp(),
      mood: selectedMood,
    });
    setNewPost({
      body: "",
    });
  } catch (error) {
    console.error("Error adding post:", error);
  }
};

// Delete Post
const deletePost = async (id) => {
  try {
    const docRef = doc(postsCollection, id);
    await deleteDoc(docRef);

  } catch (error) {
    console.error("Error deleting post:", error);
  }
};

// Update Post
const updatePost = async (id, newBody) => {
  try {
    const docRef = doc(postsCollection, id);
    await updateDoc(docRef, { body: newBody });

  } catch (error) {
    console.error("Error updating post:", error);
  }
};



// HANDLE FILTER BTN FUNCTIONALITiES

const fetchPosts = (user, setPosts) => {
  const q = query(postsCollection, where("uid", "==", user.uid), orderBy("createdAt", "desc"));
  const unsubscribe = onSnapshot(q, (snapshot) => {
    const posts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPosts(posts);
  });

  return unsubscribe;
};

const fetchTodayPost = (user, setPosts) => {
  const startDate = new Date();
  const endDate = new Date();
  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(23, 59, 59, 999);
  const q = query(
    postsCollection,
    where("uid", "==", user.uid),
    where("createdAt", ">=", startDate),
    where("createdAt", "<=", endDate),
    orderBy("createdAt", "desc")
  );
  const unsubscribe = onSnapshot(q, (snapshot) => {
    const posts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPosts(posts);
  });
  return unsubscribe
}

const fetchThisWeekPost = (user, setPosts) => {
  const startDate = new Date();
  const endDate = new Date();
  startDate.setDate(startDate.getDate() - 7);
  endDate.setDate(endDate.getDate());
  const q = query(
    postsCollection,
    where("uid", "==", user.uid),
    where("createdAt", ">=", startDate),
    where("createdAt", "<=", endDate),
    orderBy("createdAt", "desc")
  );
  const unsubscribe = onSnapshot(q, (snapshot) => {
    const posts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPosts(posts);
  });
  return unsubscribe
}

const fetchThisMonthPost = (user, setPosts) => {
  const startDate = new Date();
  const endDate = new Date();
  startDate.setDate(startDate.getDate() - 30);
  endDate.setDate(endDate.getDate());
  const q = query(
    postsCollection,
    where("uid", "==", user.uid),
    where("createdAt", ">=", startDate),
    where("createdAt", "<=", endDate),
    orderBy("createdAt", "desc")
  );
  const unsubscribe = onSnapshot(q, (snapshot) => {
    const posts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPosts(posts);
  });
  return unsubscribe
}

const pickFunction = (value, user, setPosts) => {
  switch (value) {
    case "Today":
      fetchTodayPost(user, setPosts);
      break;
    case "Week":
      fetchThisWeekPost(user, setPosts);
      break;
    case "Month":
      fetchThisMonthPost(user, setPosts);
      break;
    case "All":
      fetchPosts(user, setPosts);
    default:
      fetchPosts(user, setPosts);
      break;
  }
}

export {
  addPost,
  deletePost,
  updatePost,
  fetchPosts,
  pickFunction,
};

