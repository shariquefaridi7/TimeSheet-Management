import { useEffect, useState } from "react";
import axios from "axios";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";

const Employees = () => {
  const [data, setData] = useState({
    depart: "",
    desc: "",
    day: "",
    startTime: "",
    endTime: "",
  });

  const [fetch, setFetch] = useState([]);
  const [update, setUpdate] = useState(false);
  const [id, setId] = useState();
  const Navigate = useNavigate();

  const handelChange = (e) => {
    const { name, value } = e.target;
    if (name == "depart") {
      setData({ ...data, depart: value });
    } else if (name == "desc") {
      setData({ ...data, desc: value });
    } else if (name == "day") {
      setData({ ...data, day: value });
    } else if (name == "startTime") {
      setData({ ...data, startTime: value });
    } else {
      setData({ ...data, endTime: value });
    }
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("id");
    if (!update) {
      const resData = await axios.post(
        `http://localhost:4000/timeSheet/${userId}`,
        data
      );
      alert(resData.data.message);
      const getData = await axios.get(
        `http://localhost:4000/timeSheet/${userId}`
      );
      console.log(getData);
      setFetch(getData.data);
    } else {
      const resData = await axios.put(
        `http://localhost:4000/timeSheet/${id}`,
        data
      );
      alert(resData.data.message);
      setUpdate(false);
    }
    setData({ depart: "", desc: "", day: "", startTime: "", endTime: "" });
  };

  const handelUpdate = (item) => {
    setUpdate(true);
    setId(item._id);
    setData({
      depart: item.depart,
      desc: item.desc,
      day: item.day,
      startTime: item.startTime,
      endTime: item.endTime,
    });
  };

  const handelLogOut = () => {
    localStorage.removeItem("id");
    Navigate("/");
  };

  useEffect(() => {
    const fetch = async () => {
      const userId = localStorage.getItem("id");
      const getData = await axios.get(
        `http://localhost:4000/timeSheet/${userId}`
      );

      setFetch(getData.data);
    };
    fetch();
  }, [update]);

  return (
    <div>
      <button
        className={style.button}
        style={{
          backgroundColor: "red",
          color: "white",
          border: "1px solid red",
          width: "100px",
        }}
        onClick={handelLogOut}
      >
        Logout
      </button>
      <center>
        <div className={style.form}>
          <input
            type="text"
            placeholder="Deparment"
            onChange={handelChange}
            value={data.depart}
            name="depart"
            className={style.input}
          />
          <input
            type="text"
            placeholder="Description"
            onChange={handelChange}
            value={data.desc}
            name="desc"
            className={style.input}
          />
          <input
            type="text"
            placeholder="Day"
            onChange={handelChange}
            value={data.day}
            name="day"
            className={style.input}
          />
          <input
            type="text"
            placeholder="StartTime"
            onChange={handelChange}
            value={data.startTime}
            name="startTime"
            className={style.input}
          />
          <input
            type="text"
            placeholder="EndTime"
            onChange={handelChange}
            value={data.endTime}
            name="endTime"
            className={style.input}
          />
          <button
            onClick={handelSubmit}
            style={{ backgroundColor: "green", color: "white" }}
            className={style.button}
          >
            Submit
          </button>{" "}
        </div>

        <div className={style.table}>
          <table>
            <thead>
              <tr>
                <th>Department</th>
                <th>Description</th>
                <th>Day</th>
                <th>StartTime</th>
                <th>EndTime</th>
                <th>Rating</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {fetch.map((item) => (
                <tr key={item.id}>
                  <td>{item.depart}</td>
                  <td>{item.desc}</td>
                  <td>{item.day}</td>
                  <td>{item.startTime}</td>
                  <td>{item.endTime}</td>
                  <td>{item.rating ? item.rating : "N/A"}</td>
                  <td>
                    {item.rating ? (
                      "---"
                    ) : (
                      <button onClick={() => handelUpdate(item)}>Edit</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </center>{" "}
      <br />
    </div>
  );
};

export default Employees;
