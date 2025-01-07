
import {
  auth,
  createUserWithEmailAndPassword,
  googleProvider,
  signInWithPopup,
} from "./firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

import { fetchPosts, pickFunction } from "./firestore";


const filterPosts = (id = "all-filter-btn", setFilterBtns, setPosts) => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setFilterBtns((prev) => {
      return prev.map((btn) => {
        if (btn.id === id) {
          const Newbtn = { ...btn, selected: "selected-filter" };
          pickFunction(btn.value, user, setPosts);
          return Newbtn
        } else {
          return { ...btn, selected: "" }
        }
      })
    })
  })

  return unsubscribe
}


const observeAuthState = (setUser, setIsLoggedIn, setPosts, setFilterBtns, filterBtns) => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true);
      setUser((prevState) => ({
        ...prevState,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        successMessage: "",
        errorMessage: "",
      }));
      const activeBtn = filterBtns.find(btn => btn.selected === "selected-filter");
      let id = activeBtn.id;
      filterPosts(id, setFilterBtns, setPosts)
    } else {
      setIsLoggedIn(false);
      setUser(prevUser => ({
        ...prevUser,
        name: "",
        email: "",
        password: "",
        photoURL: "./images/default-profile-picture.jpeg",
        errorMessage: "",
        successMessage: "",
      }));
    }
  });

  return unsubscribe;
};

// GOOGLE SIGN IN
const googleSignIn = async (setUser) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const { email } = result.user;
    setUser((prevState) => ({
      ...prevState,
      email,
      successMessage: "Google sign-in successful!",
      errorMessage: "",
    }));
  } catch (error) {
    setUser((prevState) => ({
      ...prevState,
      errorMessage: "Failed to sign in with Google. Please try again.",
    }));
  }
};

// NORMAL SIGN IN
const signIn = async (user, setUser) => {
  try {
    await signInWithEmailAndPassword(auth, user.email, user.password);
    setUser((prevState) => ({
      ...prevState,
      successMessage: "Sign-in successful!",
      errorMessage: "",
    }));
  } catch (error) {
    setUser((prevState) => ({
      ...prevState,
      errorMessage: error.message,
      successMessage: "",
    }));
  }
};

// CREATE ACCOUNT
const createAccount = async (user, setUser) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    const newUser = userCredential.user;
    setUser((prevState) => ({
      ...prevState,
      successMessage: `Account created successfully for ${newUser.email}`,
      errorMessage: "",
    }));

    /*  EMAIL VERIFICATION COMMENTED OUT FOR NOW  
    
         sendEmailVerification(auth.currentUser)
          .then(() => {
            alert("Please check your email for verification!");
          })
          .catch((error) => {
            console.error("Failed to send email verification:", error.message);
          });
    
    */

  } catch (error) {
    setUser((prevState) => ({
      ...prevState,
      errorMessage: error.message,
      successMessage: "",
    }));
  }
};

// SIGN OUT
const signOutUser = (setUser) => {
  signOut(auth)
    .then(() => {
      setUser(prevUser => ({
        ...prevUser,
        name: "",
        email: "",
        password: "",
        photoURL: "./images/default-profile-picture.jpeg",
        errorMessage: "",
        successMessage: "",
      }))
    })
    .catch((error) => {
      console.error("Error signing out:", error);
    });
};

const updateUserProfile = (setUser, updatedUser) => {
  if (!updatedUser.name && !updatedUser.photoURL) return
  const newUser = {
    displayName: updatedUser.name,
    photoURL: updatedUser.photoURL
  }
  updateProfile(auth.currentUser, newUser).then(() => {
    setUser((prevState) => ({
      ...prevState,
      photoURL: newUser.photoURL,
      name: newUser.displayName,
    }))
  }).catch((error) => {
    console.error("Error updating profile:", error);
  });
}

export {
  signIn,
  createAccount,
  signOutUser,
  googleSignIn,
  updateUserProfile,
  observeAuthState,
  filterPosts,
};


