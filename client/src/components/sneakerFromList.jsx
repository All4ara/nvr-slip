import React from 'react';
import axios from 'axios';
import { useState, useEffect, useContext } from "react";
import { userContext } from "../context/userCtx";
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'


const SneakerFromList = (props) => {
    const { user } = useContext(userContext);
    const [kick, setKicks] = useState(false)
    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:3000/sneakers/${props.match.params.id}`)
            .then((res) => {
                
                console.log(res.data)
                setKicks(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    
    const handleOnClick = () => {
        axios.delete(`http://localhost:3000/sneakers/${props.match.params.id}`)
            .then((res) => {
                
                console.log(res)
                history.push("/sneakers")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const ShowIndividual = () => {
        return (
            <div>
                <div className="card m-5 p-5 d-flex flex-row indi-kicks">
                        <div>
                            <img className="card-img" src={kick.image} alt="card" />
                        </div>
                        
                        <div className="main-info">
                            <h1>{kick?.title}</h1>
                            <h4>Released: {kick?.release}</h4>
                            <h2>Retial: {kick?.price}</h2>
                        </div>
                        <div className="side-info">
                            <h6>{kick?.gender}</h6>
                            <h6>{kick?.styleCode}</h6>
                            <h6>{kick?.region}</h6>
                            <h6>Stock:{kick?.stock}</h6>
                        </div>
                </div>
                
                {user.userType === "admin" ? (
                    
                    <div className="crud-functions d-flex justify-content-center">
                        <Link to={`/sneakers/edit/${kick._id}`}><button className="m-3">Edit</button></Link>
                        <button className="m-3" onClick={handleOnClick}>Delete</button>
                        
                    </div>
                ) : null}

            </div>
            
            
        )
    }

    return (
        <div className="container">
            <div className="row m-3 p-3">
                <ShowIndividual />
            </div>
        </div>
    );
};

export default SneakerFromList;