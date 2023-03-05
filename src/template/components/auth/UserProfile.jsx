import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

/**
 * Shows user information gathered from Auth0 Universal Login. 
 * Data should only be shown when a user is authenticated in the app. 
 */
const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    // always check authentication status before rendering user information
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default UserProfile;