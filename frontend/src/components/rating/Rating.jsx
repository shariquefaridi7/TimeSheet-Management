import React, { useEffect, useState } from "react";
import axios from "axios";

const Rating = () => {
  const [fetch, setFetch] = useState([]);
  const [rating, setRating] = useState(0);
  const [update, setUpdate] = useState(false);

  const handelSubmit = async (id, rating) => {
    const resData = await axios.put(
      `http://localhost:4000/timeSheet/rating/${id}`,
      { rating }
    );

    alert(resData.data.message);
    setUpdate((prev) => !prev);
  };

  useEffect(() => {
    const fetch = async () => {
      const getData = await axios.get(`http://localhost:4000/timeSheet`);

      setFetch(getData.data);
    };
    fetch();
  }, [update]);

  return (
    <div>
      <center>
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
            );
          })}
        </table>
      </center>
    </div>
  );
};

export default Rating;
