import React from "react";
import AuthFields from "./AuthFields";
import ProviderButtons from "./ProviderButtons";

function LoggedOutView({ onGoogleSignIn, handleSignIn, handleCreateAccount, handleChange, user }) {
  return (
    <div id="logged-out-view">
      <div className="container">
        <h1 className="app-title">Moody</h1>

        <ProviderButtons
          onGoogleSignIn={onGoogleSignIn}
        />

        <AuthFields
          user={user}
          handleSignIn={handleSignIn}
          handleCreateAccount={handleCreateAccount}
          handleChange={handleChange}
        />

      </div>
    </div>
  );
}

export default LoggedOutView;

