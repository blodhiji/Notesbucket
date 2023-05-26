import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      history.push("/home");
      props.showAlert("Login successfully ", "success");

      // setTimeout(() => {
      //   localStorage.removeItem("token");
      //   history.push("/");
      // }, 1000 * 60 * 5);
    } else {
      props.showAlert("Invalid credentials", "danger");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="bb">
        <div className="center">
          <h2>Login</h2>
          <hr />
          <br />
          <form className="row g-3" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={credentials.email}
                onChange={onChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={credentials.password}
                onChange={onChange}
                required
              />
            </div>
            <div className="">
              <div className="">
                <input
                  className="form-check-input "
                  type="checkbox"
                  id="invalidCheck3"
                  aria-describedby="invalidCheck3Feedback"
                  required
                />
                <label className="" htmlFor="invalidCheck3">
                  Agree to terms and conditions <br />
                  You must agree before submitting.
                </label>
              </div>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button className="btnn mx-4" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
