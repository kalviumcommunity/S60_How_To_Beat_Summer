import { useState } from "react";
import axios from "axios";

function Adding(){
    const[Cateory,SetCateory]=useState("")
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
         e.preeventDefault();
         axios.post("http://localhost:8080/post",{Cateory, image, health, beauty, dos , donts})
         .then(data=>console.log(data))
         .catch(error=>console.log(error))
      }
    return(
       <div>
        <form onSubmit={RecordSubmit}>
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
            <button>Add</button>
            </div>
        </form>
       </div>
    )
}

export default Adding

