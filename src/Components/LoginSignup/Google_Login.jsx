// import { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';


export const Google_Login = () => {
    return (
        <div className="google-sign">
             <GoogleOAuthProvider clientId="872321533846-48mtharu0ugi5am733bi3phs9ahqa40g.apps.googleusercontent.com">
                <GoogleLogin
                   onSuccess={credentialResponse => {
                   console.log(credentialResponse);
                   }}
                   onError={() => {
                   console.log('Login Failed');
                   }}
                />
             </GoogleOAuthProvider>
        </div>
    )
}

// export default Google_Login;