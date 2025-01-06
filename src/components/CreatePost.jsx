

function CreatePost({ handleNewPostChange, handleAddPost, newPost }) {
  return (
    <div className="post-section">
      <textarea
        id="body"
        placeholder="Write down how you're feeling..."
        value={newPost.body}
        onChange={handleNewPostChange}
      ></textarea>
      <button
        id="post-btn"
        className="primary-btn"
        onClick={handleAddPost}
      >Post</button>
    </div>
  )
}


export default CreatePost
