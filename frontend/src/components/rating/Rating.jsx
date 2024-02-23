import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";

const Rating = () => {
  const [fetch, setFetch] = useState([]);
  const [rating, setRating] = useState(0);
  const [update, setUpdate] = useState(false);

  const handelSubmit = async (id, rating) => {
    const resData = await axios.put(
      `https://time-sheet-management-api.vercel.app/timeSheet/rating/${id}`,
      { rating }
    );

    alert(resData.data.message);
    setUpdate((prev) => !prev);
  };

  const Navigate = useNavigate();
  useEffect(() => {
    const fetch = async () => {
      const getData = await axios.get(`https://time-sheet-management-api.vercel.app/timeSheet`);

      setFetch(getData.data);
    };
    fetch();
  }, [update]);

  return (
    <div>
      <button className={style.button}
        style={{
          backgroundColor: "red",
          color: "white",
          border: "1px solid red",
          width: "100px",
        }}
        onClick={() => Navigate("/auth")}
      >
        Logout
      </button>
      <center>
        <div className={style.table}>
          <table>
            <thead>
              <th>Department</th>
              <th>Description</th>
              <th>Day</th>
              <th>StartTime</th>
              <th>EndTime</th>
              <th>AllotedRating</th>
              <th>Rating</th>
              <th>Submit</th>
            </thead>
            {fetch.map((item) => {
              return (
                <>
                  <tbody>
                    <td>{item.depart}</td>
                    <td>{item.desc}</td>
                    <td>{item.day}</td>
                    <td>{item.startTime}</td>
                    <td>{item.endTime}</td>
                    <td>{item.rating}</td>
                    <td>
                      <select
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      >
                        <option value={0}>Select</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </td>
                    <td>
                      {
                        <button onClick={() => handelSubmit(item._id, rating)}>
                          Submit
                        </button>
                      }
                    </td>
                  </tbody>
                </>
              );
            })}
          </table>
        </div>
      </center>
    </div>
  );
};

export default Rating;
