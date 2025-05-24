import React, { useContext } from "react";
import SocialLogin from "./SocialLogin";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Utilities/Auth/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { loginUser } = useContext(AuthContext);
  // const [error, setError] = useState("");
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "login successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(state || "/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error?.code || "Login Error",
          text: error?.message || "Something went wrong",
        });
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-8">
      <h1 className="font-bold text-4xl my-3 text-center">Login Now!</h1>
      <div className="card-body">
        <form onSubmit={handleSignIn} className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Enter Your email"
            required
          />
          {/* password */}

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Enter Your Password"
            required
          />
          <button>Forget password?</button>
          {/* {error && <p className="text-xs text-red-500">{error}</p>} */}

          <button type="submit" className="btn bg-red-500 text-white rounded-full mt-4">
            Login
          </button>
          <Link to={"/register"}>Don't have an account? Register</Link>
        </form>

        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
