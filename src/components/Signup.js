import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const Signup = ( props) => {
  const [credentials, setCredentials] = useState({ firstname: "", lastname: "", email: "", password: "" });
  let history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstname, lastname, email, password } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({firstname, lastname, email, password})
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      // localStorage.setItem("token", json.authtoken);
      history.push("/");
      props.showAlert("Account Created Successfully", "success");
    } else {
     props.showAlert("Invalid credentials", "danger");
    }
  }
    const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

  return (
    <>
       <div className="bb">
    <div className="center">
      <h2>Sign Up</h2><hr/><br/>
    <form className="row g-3" onSubmit={handleSubmit}>
        <div >
            <label htmlFor="firstname" className="form-label">First name</label>
            <input type="firstname" className="form-control" id="firstname" name="firstname" onChange={onChange} minLength={3} required/>
          </div>
        <div >
            <label htmlFor="lastname" className="form-label">Last name</label>
            <input type="Lastname" className="form-control" id="lastname" name="lastname" onChange={onChange} minLength={3} required/>
          </div>
          <div >
            <label htmlFor="email" className="form-label">E-mail</label>
            <input type="email" className="form-control" id="email" name="email" onChange={onChange} required/>
          </div>
          <div >
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required/>
          </div>
       
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btnn mx-4" type="submit">Signp</button>
        </div>
      </form>
</div>
</div>
    </>
  )
}

export default Signup
