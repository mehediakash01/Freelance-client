import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Utilities/Auth/AuthProvider';
const SocialLogin = () => {
  const {continueWithGoogle} = useContext(AuthContext);
  const handleGoogle = ()=>{
    continueWithGoogle()
  }
 
    return (
          <div >
      <p className="text-center">or</p>
      <button onClick={handleGoogle}   className="btn btn-info w-full">
    
        <FcGoogle />Continue with Google
    
      </button>
    </div>
    );
};

export default SocialLogin;