import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Utilities/Auth/AuthProvider";
import { useLocation, useNavigate } from "react-router";
const SocialLogin = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { continueWithGoogle } = useContext(AuthContext);
const handleGoogle = async () => {
  try {
    await continueWithGoogle(); 
    navigate(state || "/");    
  } catch (error) {
    console.log("Google sign-in failed", error);
  }
};


  return (
    <div>
      <p className="text-center">or</p>
      <button onClick={handleGoogle} className="btn btn-info w-full">
        <FcGoogle />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
