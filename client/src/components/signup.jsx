import { useState, useContext } from "react";
import { userContext } from "../context/userCtx";
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const Adduser = () => {

    const { setUser } = useContext(userContext);

    const [username, setUsername] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    const history = useHistory()

    function handleUserChange(event) {
        setUsername({
            ...username,
            [event.target.name]: event.target.value
        })
    }

    function addUserHandler(event) {

        event.preventDefault();
        axios.post("http://localhost:3000/user/signup", username)
            .then((res) => {

                setUser(res?.data?.user);
                localStorage.setItem("token", res.data.token);
                history.push("/sneakers")
            })
            .catch((error) => {
                console.log(error)
            })
    }





    return (
        <div className="kick-list container mt-5 p-5">
            <div className="row ">
                <form onSubmit={addUserHandler}>
                    <input className="col-12" type="text" name="firstName" value={username.firstName} placeholder="First Name" onChange={handleUserChange}></input>
                    <input className="col-12" type="text" name="lastName" value={username.lastName} placeholder="Last Name" onChange={handleUserChange}></input>
                    <input className="col-12" type="text" name="email" value={username.email} placeholder="Email" onChange={handleUserChange}></input>
                    <input className="col-12" type="text" name="password" value={username.password} placeholder="Password" onChange={handleUserChange}></input>


                    <button type="submit">Submit</button>
                    <br /><br />
                    <h3>Already a user?</h3><Link to="/login">Login</Link>
                </form>
            </div>
        </div>

    );
};

export default Adduser;