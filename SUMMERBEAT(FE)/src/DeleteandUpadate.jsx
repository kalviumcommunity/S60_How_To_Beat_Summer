import { useState } from "react";
import axios from "axios";
import {useNavigate,useParams} from "react-router-dom"

function Add(){
    const navigate = useNavigate()
    const {key} = useParams()
    const[cateory,SetCateory]=useState("")
    const[image,SetdataImage]=useState("")
    const[health,sethealthData]=useState("")
    const[beauty,setbeautyData]=useState("")
    const[dos,setdosData] = useState("")
    const[donts, setdontsData] = useState("")
    function changeCateogory(e){
      SetCateory(e.target.value)
    }
    function changeImage(e){
        SetdataImage(e.target.value)
    }
      function changeHealth(e){
        sethealthData(e.target.value)
      }
      function changeBeauty(e){
        setbeautyData(e.target.value)
      }
      function changeDos (e){
        setdosData(e.target.value)
      }
      function changeDonts (e) {
        setdontsData(e.target.value)
      }
      function RecordSubmit(e){
         e.preventDefault();
         console.log({cateory, image, health, beauty, dos , donts})
         axios.put("http://localhost:8080/put/"+key,{cateory, image, health, beauty, dos , donts})
         .then(()=>{ navigate("/")})
         .catch(error=>console.log(error))  
      }
    return(
       <div>
        <form>
            <div>
            <input type="text" placeholder="Cateogry Name" onChange={changeCateogory} />
            </div>
            <div>
            <input type="text" placeholder="Image" onChange={changeImage} />
            </div>
            <div>
            <input type="text" placeholder="health" onChange={changeHealth}/>
            </div>
            <div>
            <input type="text" placeholder="beauty" onChange={changeBeauty} />
            </div>
            <div>
              <input type="text" placeholder="dos" onChange={changeDos}/>
            </div>
            <div>
              <input type="text" placeholder="donts" onChange={changeDonts} />
            </div>
            <div>
            <button onClick={RecordSubmit}>update</button>
            </div>
        </form>
       </div>
    )
}

export default Add

