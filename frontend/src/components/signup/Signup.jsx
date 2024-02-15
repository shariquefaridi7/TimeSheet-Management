import { useState } from "react";
import axios from "axios";
import style from "./style.module.css";
import { NavLink, useNavigate } from "react-router-dom";
const Signup = () => {
  const [data, setData] = useState({ name: "", email: "", pass: "" });

  const Navigate = useNavigate();
  const handelChange = (e) => {
    const { name, value } = e.target;
    if (name == "name") {
      setData({ ...data, name: value });
    } else if (name == "email") {
      setData({ ...data, email: value });
    } else {
      setData({ ...data, pass: value });
    }
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const resData = await axios.post("http://localhost:4000/signup", data);
    alert(resData.data.message);
    setData({ name: "", email: "", pass: "" });
    if (resData.data.message == "SignUp Successfull") {
      localStorage.setItem("id", resData.data.data._id);
      Navigate("/employees");
    }
  };

  return (
    <div>
      <center>

        <div className={style.form}>
          <h1 style={{ color: "white" }}>Create Account</h1>
          <input
            type="text"
            placeholder="Enter Name "
            onChange={handelChange}
            value={data.name}
            name="name"
            className={style.input}
          />
          <br />
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
          <NavLink
            to={"/login"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <p style={{ color: "white" }}>Already an account</p>
          </NavLink>
        </div>
      </center>
    </div>
  );
};

export default Signup;
