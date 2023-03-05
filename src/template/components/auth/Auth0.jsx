import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import UserProfile from "./UserProfile";
import { Auth0Provider } from "@auth0/auth0-react";

/**
 * Demo of basic Auth0 components that can be used within your app. The 
 * [Auth0Provider] should be wrapped around the entrypoint of your application, 
 * but is located here for ease of install. 
 */
function Auth0() {
  return (
    // Move this Auth0Provider to wrap the entrypoint of your App (index.js)
    <Auth0Provider
      domain="your-auth0-domain-name"
      clientId="your-auth0-clientId"
      authorizationParams={{
        // todo: this must be an Allowed Callback URL configured in your Auth0 app. 
        redirect_uri: window.location.origin
      }}
    >
      <LoginButton />
      <LogoutButton />
      <UserProfile />
    </Auth0Provider>
  )
}

export default Auth0;
