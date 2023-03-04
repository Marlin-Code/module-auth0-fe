import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

/**
 * Button to move the user to an unauthenticated state.
 */
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() => logout({
        logoutParams: {
          // todo: this must be an Allowed Logout URL configured in your Auth0 app. 
          returnTo: window.location.origin
        }
      })}>
      Log Out
    </button>
  );
};

export default LogoutButton;