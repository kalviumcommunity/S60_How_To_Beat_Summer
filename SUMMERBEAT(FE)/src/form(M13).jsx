import { useState ,useEffect} from "react";
import axios from "axios";

function Adding(){
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [health, setHealthData] = useState("");
    const [beauty, setBeautyData] = useState("");
    const [dos, setDosData] = useState("");
    const [donts, setDontsData] = useState("");
    const [nickname , setname] = useState("")

    useEffect(()=>{
        const cookieoutput=document.cookie;
        const dividecookie=cookieoutput.split("; ")
        const cookieobject={}
        for(const k of dividecookie){
          const[key,value]=k.split("=")
          cookieobject[key]=value
        }
        const Name=cookieobject["name"]
        setname(Name)
      },[])

    function changeCategory(e){
      setCategory(e.target.value);
    }

    function changeImage(e){
        setImage(e.target.value);
    }

    function changeHealth(e){
        setHealthData(e.target.value);
    }

    function changeBeauty(e){
        setBeautyData(e.target.value);
    }

    function changeDos(e){
        setDosData(e.target.value);
    }

    function changeDonts(e){
        setDontsData(e.target.value);
    }

    function recordSubmit(){
        axios.post("http://localhost:8080/post", {category, image, health, beauty, dos, donts,nickname})
             .then(data => console.log(data))
             .catch(error => console.log(error));
    }

    return(
        <div className="loginpage">
            <form>
                <div>
                    <input type="text" placeholder="Category Name" onChange={changeCategory} />
                </div>
                <div>
                    <input type="text" placeholder="Image" onChange={changeImage} />
                </div>
                <div>
                    <input type="text" placeholder="Health" onChange={changeHealth} />
                </div>
                <div>
                    <input type="text" placeholder="Beauty" onChange={changeBeauty} />
                </div>
                <div>
                    <input type="text" placeholder="Dos" onChange={changeDos} />
                </div>
                <div>
                    <input type="text" placeholder="Donts" onChange={changeDonts} />
                </div>
            </form>
            <p>{nickname}</p>
            <button onClick={recordSubmit}>Add</button>
        </div>
    );
}

export default Adding;


