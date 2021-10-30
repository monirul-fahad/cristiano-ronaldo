import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/google.png";
import ShortBanner from "../../ShortBanner/ShortBanner";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";

  const handleGoogleSignIN = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_url);
    });
  };

  return (
    <div>
      <ShortBanner></ShortBanner>
      <div className="py-5">
        <h2 className="py-3">Please Sign In with Google</h2>
        <button
          className="google-button centered rounded-pill"
          onClick={handleGoogleSignIN}
        >
          {" "}
          <img src={logo} alt="google" /> Sign In with Google{" "}
        </button>
      </div>
    </div>
  );
};

export default Login;
