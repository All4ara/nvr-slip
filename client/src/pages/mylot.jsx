import React from 'react';
import axios from 'axios';
import { useState, useEffect, useContext } from "react";
import { userContext } from "../context/userCtx";
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const Mylot = (props) => {
    const { user } = useContext(userContext);
    const [username, setUsername] = useState(false)
    const history = useHistory()


    useEffect(() => {
        axios.get(`http://localhost:3000/mylot/users/${props.match.params.id}`)
        
            .then((res) => {
                
                // console.log(res.data)
                setUsername(res.data)
            })
           
            .catch((error) => {
                console.log(error)
            }) 
            
    }, [username])


    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <img className="profile-pic" src="https://images.fineartamerica.com/images-medium-large-5/star-wars-themed-empty-profile-pic-pushkaraj-shirke.jpg" alt="profile picture"/>
                    <h3>{username.firstName} {username.lastName}</h3>

                </div>
                <div className="col-12 text-center">
                    
                </div>
            </div>
        </div>
    );
};

export default Mylot;