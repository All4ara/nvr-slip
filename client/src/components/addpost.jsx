import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

const AddPost = () => {
    const [article, setArticle] = useState({
        title: String,
        image: String,
        release: String,
        price: String,
        gender: String,
        styleCode: String,
        region: String,
        // locations: [String],
        stock: Number,
        company: String
    })
    const history = useHistory()
    
    function handleArticleChange(event) {
        setArticle({
            ...article,
            [event.target.name]: event.target.value
        })
    }
    
    function addArticleHandler(event) {

       

        event.preventDefault();
        var config = {
            method: 'post',
            url: "http://localhost:3000/sneakers/addPost",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json'
            },
            data: { article }
        };
        axios(config)
            .then((response) => {
                history.push("/sneakers")

            })
            .catch((error) => {

            });

    }
    
    return (
        <div className="container m-5 p-5">
            <div className="row d-flex flex-column">
                <form onSubmit={addArticleHandler}>
                    <input type="text" name="title" value={article.title} placeholder="title" onChange={handleArticleChange}></input>
                    <input type="text" name="image" value={article.image} placeholder="image" onChange={handleArticleChange}></input>
                    <input type="text" name="release" value={article.release} placeholder="release" onChange={handleArticleChange}></input>
                    <input type="text" name="price" value={article.price} placeholder="price" onChange={handleArticleChange}></input>
                    <input type="text" name="gender" value={article.gender} placeholder="gender" onChange={handleArticleChange}></input>
                    <input type="text" name="styleCode" value={article.styleCode} placeholder="style code" onChange={handleArticleChange}></input>
                    <input type="text" name="region" value={article.region} placeholder="region" onChange={handleArticleChange}></input>
                    <input type="text" name="stock" value={article.stock} placeholder="stock" onChange={handleArticleChange}></input>
                    <input type="text" name="company" value={article.company} placeholder="company" onChange={handleArticleChange}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddPost;