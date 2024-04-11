import axios from "axios";
import { useState, useEffect } from "react";

function FetchData() {
  const [summerData, setsummerData] = useState([]);

  useEffect(() => {
    const gettingData = async () => {
      try {
        const database = await axios.get("http://localhost:8080/get");
        console.log(database.data.a);
        setsummerData(database.data.a);
      } catch (err) {
        console.error("Error :", err);
      }
    };
    gettingData();
  }, []);
  return (
    <div>
      {summerData.map((data) => {
        return (
          <div key={data._id}>
            <h3><b>Cateory Name: </b> {data.category}</h3>
            <img src={data.image} alt="" />
            <p> <b>Health Tip: </b> {data.health}</p>
            <p> <b>Beauty Tip: </b> {data.beauty}</p>
            <p> <b>Dos: </b> {data.dos}</p>
            <p> <b>Donts: </b> {data.donts}</p>
          </div>
        )})}
    </div>
)}

export default FetchData;
