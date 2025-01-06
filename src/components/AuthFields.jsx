function AuthFields({ user, handleSignIn, handleCreateAccount, handleChange }) {
  return (
    <div className="auth-fields-and-buttons">
      <input
        id="email"
        type="email"
        placeholder="example@gmail.com"
        value={user.email}
        onChange={handleChange}
        required
      />
      <input
        id="password"
        type="password"
        placeholder="*******"
        value={user.password}
        onChange={handleChange}
        required
      />
      {user.errorMessage && <p style={{ color: "red" }}>{user.errorMessage}</p>}
      {user.successMessage && <p style={{ color: "green" }}>{user.successMessage}</p>}
      <button id="sign-in-btn" className="primary-btn" onClick={handleSignIn}>
        Sign in
      </button>
      <button
        id="create-account-btn"
        className="secondary-btn"
        onClick={handleCreateAccount}
      >
        Create Account
      </button>
    </div>
  );
}

export default AuthFields;

