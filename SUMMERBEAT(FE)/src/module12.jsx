import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function FetchData() {
  const [summerData, setsummerData] = useState([]);

  const DeleteData = async (key) => {
    try {
      const r = await axios.delete(`http://localhost:8080/delete/${key}`);
      location.reload();
      console.log(r);
    } catch (err) {
      console.log(err);
    }
  };
const cookieremove=()=>{
  document.cookie = "email=; expires = mon, 22 april 2024 00:00:00 GMT ";
  document.cookie = "token=; expires = mon 22 april 2024 00:00:00 GMT"
  document.cookie = "name=; expires = mon, 22 april 2024 00:00:00 GMT "
}
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
      <div className="nav">
        <Link to="/post">
          <button>Add</button>{" "}
        </Link>
        <button onClick={cookieremove}>Log Out</button>
        <Link to="/datafilter">
        <button>Filter</button>
        </Link>
      </div>
<div className="getreq">      
  {summerData.map((data) => {
        return (
          <div key={data._id} >
            <h3>
              <b>Cateory Name: </b> {data.category}
            </h3>
            <img src={data.image} alt="image here" />
            <p>
              {" "}
              <b>Health Tip: </b> {data.health}
            </p>
            <p>
              {" "}
              <b>Beauty Tip: </b> {data.beauty}
            </p>
            <p>
              {" "}
              <b>Dos: </b> {data.dos}
            </p>
            <p>
              {" "}
              <b>Donts: </b> {data.donts}
            </p>
            <button
              onClick={() => {
                DeleteData(data._id);
              }}
            >
              Delete
            </button>
            <Link to={`/update/${data._id}`}>
              <button>Update</button>
            </Link>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default FetchData;
