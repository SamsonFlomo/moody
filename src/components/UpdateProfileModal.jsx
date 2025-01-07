import "../modals.css";


function UpdateProfileModal({
  updatedUser,
  handleUpdateProfile,
  handleUpdateProfileChange,
  closeModal,
}) {
  return (
    <div className="modal-overlay">
      <div className="modal update-profile">
        <button className="close-btn" onClick={closeModal}>
          x
        </button>
        <h2>Update Profile</h2>
        <label for="name"> Full Name
          <input
          id="name"
          type="text"
          value={updatedUser.name}
          onChange={handleUpdateProfileChange}
          placeholder="John Doe"
          required
          />
        </label>
        
        
        <label for="photoURL"> Profile Picture Link
          <input
          id="photoURL"
          type="text"
          value={updatedUser.photoURL}
          onChange={handleUpdateProfileChange}
          placeholder="https://example.com/profile-picture.jpg"
          required
          />
        </label>
        
        <button className="primary-btn" onClick={handleUpdateProfile}>
          Update
        </button>
      </div>
    </div>
  );
}

export default UpdateProfileModal;
