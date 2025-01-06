import { useState } from "react";
import UpdateProfileModal from "./UpdateProfileModal";
import CreatePost from "./CreatePost";

function LoggedInView({
  user,
  onSignOut,
  updatedUser,
  handleUpdateProfile,
  handleUpdateProfileChange,
  handleAddPost,
  handleDeletePost,
  handleUpdatePost,
  handleUpdatePostChange,
  handleNewPostChange,
  handleMoodClick,
  posts,
  newPost,
  mood,
  displayFormatedDate,
  replaceNewLines,
  filterBtns,
  handleFilterBtnClick,
  editingPost,
  updateEditingPost,
}) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  const moodElments = mood.map((mood) => (
    <button
      key={mood.id}
      id={mood.id}
      className={`mood-emoji-btn ${mood.selected}`}
      onClick={handleMoodClick}
    >
      <img src={mood.imgUrl} alt={`An ${mood.name} face emoji`} />
      {mood.name}
    </button>
  ));

  const postsElement = posts.map((post) => (
    <div key={post.id} className="post">
      <div className="header">
        {
          !post.createdAt ?
            "Processing date..." :
            <h3>{displayFormatedDate(post.createdAt)}</h3>
        }
        <img src={`./emojis/${post.mood}.png`} />
      </div>
      <p> {replaceNewLines(post.body)} </p>
      <div className="footer">
      <button
        onClick={() => updateEditingPost(post.id, post.body)}
        className="edit-color"
        aria-pressed={editingPost.id === post.id}
      >
        Edit
      </button>
      <button
        onClick={() => handleDeletePost(post.id)}
        className="delete-color"
      >Delete</button>
      </div>
    </div>
  ))

  const filterBtnElements = filterBtns.map((btn) => (
    <button
      key={btn.id}
      id={btn.id}
      className={`${btn.id.split("-")[1]}-btn ${btn.selected}`}
      onClick={handleFilterBtnClick}
      aria-pressed={btn.selected}
    >
      {btn.value}
    </button>
  ))


  return (
    <section id="logged-in-view">
      <div className="container">
        <nav>
          <button className="update-profile-btn scale" onClick={toggleModal}>
            Update Profile
          </button>

          <button className="sign-out-btn scale" onClick={onSignOut}>
            <img
              src="./icons/icon-sign-out.svg"
              className="icon-img-btn"
              alt="Sign out icon"
            />
          </button>
        </nav>

        <div className="app-container">
          <div className="user-section">
            <img
              id="user-profile-picture"
              src={user.photoURL}
              alt={`${user.name ? user.name : "User"}'s profile picture`}
            />
            <h2 id="user-greeting">
              Hello, {user.name ? user.name.split(" ")[0] : "my friend"}! How are you?
            </h2>
          </div>
        </div>

        {/* Mood Section */}
        < div className="mood-emojis" >
          {moodElments}
        </div >

        {/* Create Post Section */}
        < CreatePost
          handleNewPostChange={handleNewPostChange}
          handleAddPost={handleAddPost}
          newPost={newPost}
        />


        {/* Display Posts */}

        <div className="filters-and-posts-section">
          <div className="filters-section">
            {filterBtnElements}
          </div>

          < div className="posts-section" >
            {
              posts.length > 0 ? (
                postsElement
              ) : (
                <p>No Posts Available</p>
              )
            }
          </div >
        </div>


        {/* Edit Post Section */}
        {
          editingPost.show && (
            <div className="modal-overlay">
              <div className="modal edit-post-section">
                <textarea
                  id="body"
                  placeholder="Tell others how you're feeling..."
                  value={editingPost.body}
                  onChange={handleUpdatePostChange}
                ></textarea>
                <button onClick={handleUpdatePost}>Update Post</button>
              </div>
            </div>
          )
        }

        {/* Update Profile Modal */}
        {
          showModal && (
            <UpdateProfileModal
              updatedUser={updatedUser}
              handleUpdateProfile={handleUpdateProfile}
              handleUpdateProfileChange={handleUpdateProfileChange}
              closeModal={toggleModal}
            />
          )
        }

      </div >
    </section >
  );
}

export default LoggedInView;

