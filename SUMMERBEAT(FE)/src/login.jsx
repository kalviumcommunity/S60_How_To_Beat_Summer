import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
    const [name , setName ] = useState("");
    const [email, setEmail] = useState("");
    const [pin , setPin] = useState("");
    const navigate = useNavigate();

    const submit = (event) => {
        event.preventDefault();
        if (name && email && pin) { 
            axios.post("http://localhost:8080/login", { name, email, pin })
                .then((res) => {
                    console.log(res.data.message);
                    if (res.data.message === "User Login") {
                        navigate("/fetch");
                        document.cookie = `name=${name}; expires=Sun, 31 Dec 2034 00:00:00 GMT`;
                        document.cookie = `token=${res.data.cookieToken}; expires=Sun, 31 Dec 2034 00:00:00 GMT`;
                        document.cookie = `email=${email}; expires=Sun, 31 Dec 2034 00:00:00 GMT`;
                    } else if (res.data.message === "Invalid user details, Prefer to signup") {
                        error();
                    }
                })
                .catch((err) => {
                    console.log(err);
                    error();
                });
        } else {
            alert("Please fill in all fields.");
        }
    };

    function error() {
        alert("Failed to login!!");
    }

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
        <div className="loginpage">
            <div>
                <input type="text" placeholder="Name" onChange={(e) => { username(e) }} required />
            </div>
            <div>
                <input type="text" placeholder="Email" onChange={(e) => { usermail(e) }} required />
            </div>
            <div>
                <input type="text" placeholder="Enter Pin" onChange={(e) => { userpin(e) }} required />
            </div>
            <button onClick={submit}>Login</button>
        </div>
    );
}

export default Login;




