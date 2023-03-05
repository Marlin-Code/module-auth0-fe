import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

/**
 * Used to redirect a user to your Universal Login page hosted by Auth0
 */
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="log-in-btn"
      onClick={() => loginWithRedirect()}>Log In
    </button>
  );
};

export default LoginButton;