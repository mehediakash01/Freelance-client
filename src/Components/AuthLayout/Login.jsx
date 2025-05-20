import React from 'react';

const Login = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-base-200">
      <form className="card w-full max-w-sm shadow-xl bg-base-100 p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered"
          />
        </div>

        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email@example.com"
            className="input input-bordered"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </form>
    </div>
    );
};

export default Login;