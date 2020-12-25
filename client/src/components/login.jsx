import axios from 'axios';
import { useState, useContext } from "react";
import { userContext } from "../context/userCtx";
import { useHistory } from 'react-router-dom'


const Login = () => {

    const { setUser } = useContext(userContext);
    const history = useHistory()
    const [username, setUsername] = useState({
        email: "",
        password: ""
    });


    function handleUserChange(event) {
        setUsername({
            ...username,
            [event.target.name]: event.target.value
        })
    }

    function loginUserHandler(event) {
        debugger

        event.preventDefault();
        axios.post("http://localhost:3000/user/login", username)
            .then((res) => {
                console.log(res)
                setUser(res.data.user);
                localStorage.setItem("token", res.data.token);
                history.push("/sneakers");
            })
            .catch((error) => {
                console.log(error)
            })
    }





    return (
        <div className="kick-list container m-5 p-5">
            <div className="row">
                <form onSubmit={loginUserHandler}>
                    <input className="col-12" type="text" name="email" value={username.email} placeholder="Email" onChange={handleUserChange}></input>
                    <input className="col-12" type="password" name="password" value={username.password} placeholder="Password" onChange={handleUserChange}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Login;