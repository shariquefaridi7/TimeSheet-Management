import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./style.module.css";

const Login = () => {
  const [data, setData] = useState({ email: "", pass: "" });
  const Navigate = useNavigate();
  const handelChange = (e) => {
    const { name, value } = e.target;
    if (name == "email") {
      setData({ ...data, email: value });
    } else {
      setData({ ...data, pass: value });
    }
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const resData = await axios.post("http://localhost:4000/login", data);
    console.log(resData);
    if (resData.data.message == "Login Successfull") {
      alert("Welcome back " + resData.data.resData.empName);
      localStorage.setItem("id", resData.data.resData._id);
      Navigate("/employees");
    } else {
      alert(resData.data.message);
    }
    setData({ email: "", pass: "" });
  };

  return (
    <div>
      <center>

        <div className={style.form}>
          <h1 style={{ color: "white" }}>Login</h1>
          <input
            type="text"
            placeholder="Enter Email "
            onChange={handelChange}
            value={data.email}
            name="email"
            className={style.input}
          />
          <br />
          <input
            type="password"
            placeholder="Enter Password "
            onChange={handelChange}
            value={data.pass}
            name="pass"
            className={style.input}
          />
          <br />
          <button
            onClick={handelSubmit}
            style={{ backgroundColor: "green", color: "white" }}
            className={style.submit}
          >
            Submit
          </button>
          <NavLink to={"/"} style={{ textDecoration: "none", color: "black" }}>
            <p style={{ color: "white" }}>Create an account</p>
          </NavLink>
        </div>
      </center>
    </div>
  );
};

export default Login;
