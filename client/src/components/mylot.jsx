import React from 'react';
import { Link } from 'react-router-dom'

const Mylot = () => {
    
    return (
        <div className="m-5">
            <Link to="/addPost"><button className="m-3">Add Post</button></Link>
        </div>
    );
};

export default Mylot;