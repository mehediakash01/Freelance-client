import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Utilities/Auth/AuthProvider";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
const SocialLogin = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { continueWithGoogle } = useContext(AuthContext);
  const handleGoogle = async () => {
    try {
      await continueWithGoogle();
      navigate(state || "/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error?.code || "Login Error",
        text: error?.message || "Something went wrong",
      });
    }
  };

  return (
    <div>
      <p className="text-center">or</p>
      <button onClick={handleGoogle} className="btn btn-info w-full rounded-full">
        <FcGoogle />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
