import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function SignUp() {
    const [name , setName ] = useState("");
    const [email, setEmail] = useState("");
    const [pin , setPin] = useState("");
    const navigate = useNavigate();

    const submit = () => {
        if (name && email && pin) { 
            axios.post("http://localhost:8080/sign", { name, email, pin })
                .then(res => {
                    console.log(res);
                    navigate("/fetch");
                })
                .catch(err => console.log(err));
        } else {
            alert("Please fill in all fields.");
        }
    };

    function username(e) {
        setName(e.target.value);
    }

    function usermail(e) {
        setEmail(e.target.value);
    }

    function userpin(e) {
        setPin(e.target.value);
    }
    
    return (
        <div>
            <h1 className="heading"> 😥✨HOW TO BEAT SUMMER✨</h1>
        <div className="signpage">
            <div>
                <input type="text" placeholder="Name" onChange={(e) => { username(e) }} required />
            </div>
            <div>
                <input type="text" placeholder="Email" onChange={(e) => { usermail(e) }} required />
            </div>
            <div>
                <input type="text" placeholder="Enter Pin" onChange={(e) => { userpin(e) }} required />
            </div>
            <button onClick={submit}>SignUp</button>
            <button onClick={() => navigate("/login")}>Login</button>
        </div>
        </div>
    );
}

export default SignUp;
