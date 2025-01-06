function ProviderButtons({ onGoogleSignIn }) {
  return (
    <div className="provider-buttons">
      <button
        id="sign-in-with-google-btn"
        className="provider-btn"
        onClick={onGoogleSignIn}
      >
        <img
          src="./providers/google.png"
          alt="Google logo"
          className="google-btn-logo"
        />
        Sign in with Google
      </button>
    </div>
  );
}


export default ProviderButtons;

