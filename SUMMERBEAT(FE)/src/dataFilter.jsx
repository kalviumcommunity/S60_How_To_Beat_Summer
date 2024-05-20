import { useState, useEffect } from "react";
import axios from "axios";

function Filtering() {
    const [userData, setuserData] = useState([]);
    const [summerData,setsummerData] = useState([]);
    const [click, setclick ] = useState("")
    useEffect(() => {
        const gettingData = async () => {
            try {
                const database = await axios.get("http://localhost:8080/sign");
                setuserData(database.data);
            } catch (err) {
                console.error("Error:", err);
            }
        };
        gettingData();
    }, []);

    useEffect(() => {
        const gettingData = async () => {
          try {
            const database = await axios.get("http://localhost:8080/get");
            setsummerData(database.data.a);
          } catch (err) {
            console.error("Error :", err);
          }
        };
        gettingData();
      }, []);

    function userUpdate (u){
        setclick(u);
    }
    return (
        <div>
        <div>
            {userData.length > 0 ? (
                userData.map((data) => (
                    <div key={data._id}>
                        <h3>
                            <b onClick={()=>{userUpdate(data.name)}}>USER NAME:- </b> {data.name}
                        </h3>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
        <div>
            {summerData
            .filter((item)=>click===item.nickname)
            .map((data) => {
                return (
                  <div key={data._id}>
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
                  </div>
                );
              })
            }
        </div>
    </div>
    );
}

export default Filtering;


