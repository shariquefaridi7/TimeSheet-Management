import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";

const Auth = () => {
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

  const handelSubmit = (e) => {
    e.preventDefault();
    if (data.email == "manager@gmail.com" && data.pass == "1234567890") {
      alert("Welcome");
      setData({ email: "", pass: "" });
      Navigate("/rating");
    } else if (data.email == "" || data.pass == "") {
      alert("Please Fills All Details");
    } else {
      alert("Password and Email are not matched");
    }
  };

  return (
    <div>
      <center>

        <div className={style.form}>
          <h1 style={{ color: "white" }}>Admin Panel</h1>
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
        </div>
      </center>
    </div>
  );
};

export default Auth;
