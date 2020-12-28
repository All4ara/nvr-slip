import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Background from "./background"

const SneakerList = () => {
    const [kicks, setKicks] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:3000/sneakers")
            .then((res) => {

                console.log(res.data)
                setKicks(res.data)
            })
    }, [])

    const ShowKicks = () => {
        return kicks && kicks.reverse().map((kick, i, arr) =>  {
            
                
                return (
                    
                    <div className="d-flex flex-column align-items-center mt-5 col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card kickbox">
                            <img className="card-img" src={kick.image} alt="card" height="120"/>
                            <div className="card-img-overlay">
                                <h3>{kick.title}</h3>
                                <h4>Released: {kick.release}</h4>
                                <h4>Retial: {kick.price}</h4>
                            </div>
                        </div>

                        <Link to={`/sneakers/${kick._id}`}><button className="more-info mt-3 mb-3">More Info</button></Link>
                    </div>
                ) 
                
        

            
        })
    }

    return (
        <div className="kick-list container-fluid mt-5 ">
            <div className="row mb-5">
            
                <ShowKicks />
            </div>
        </div>

    );
};

export default SneakerList;