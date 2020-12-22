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
    }, [])
    
    const ShowIndividual = () => {
        return (

            <div className="card m-5 p-5">
                <Link to={`/sneakers/${kick._id}`}><img className="card-img" src={kick.image} alt="card" /></Link>
                <div className="">
                    <h1>{kick?.title}</h1>
                    <h4>Released: {kick?.release}</h4>
                    <h2>Retial: {kick?.price}</h2>
                    <h6>{kick?.gender}</h6>
                    <h6>{kick?.styleCode}</h6>
                    <h6>{kick?.region}</h6>
                    <h6>Stock:{kick?.stock}</h6>
                    
                </div>
            </div>
            
        )
    }

    return (
        <div className="container">
            <div className="row">
                <ShowIndividual />
            </div>
        </div>
    );
};

export default SneakerFromList;