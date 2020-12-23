import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

const EditPost = (props) => {
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

    useEffect(() => {
        axios.get(`http://localhost:3000/sneakers/${props.match.params.id}`)
            .then((response) => {

                setArticle(response.data)
                // setReviews(response.data.reviews)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    function editArticleHandler(event) {

        event.preventDefault();
        axios.put(`http://localhost:3000/sneakers/${props.match.params.id}`, article)
        .then((res) => {
            console.log(res)
            history.push("/sneakers")
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    
    return (
        <div className="container m-5 p-5">
            <div className="row d-flex flex-column">
                <form onSubmit={editArticleHandler}>
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

export default EditPost;

//title: String,
// image: String,
// release: String,
// price: String,
// gender: String,
// styleCode: String,
// region: String,
// // locations: [String],
// stock: Number,
// company: String