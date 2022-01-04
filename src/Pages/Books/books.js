/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { useState } from "react";
import axios from "axios";
import './books.scss';
import bookImg from './bookImg.png';

const Books = () => {
    const [book , setBook] = useState("")
    const [result , setResult] = useState([])
    const apiKey = "";   //place your api key here
    const handleChange = (event) =>{
        const book = event.target.value;
        setBook(book);

    }
    const handleSubmit = (event) =>{
        event.preventDefault();

        axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=3")
        .then(data => {
            console.log(data.data.items);
            setResult(data.data.items);
        })
        .catch(err => {
            alert("No book found")
            window.location.reload();
        })
    }
    return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input onChange={handleChange} type="text" className="input-control" placeholder="Search for books" autoComplete="off"/>
            <button type="submit" className="btn btn-danger">Search</button>
            </div>
        </form>
        <div className="row">
            <div className="col-1">
         {result.map(book => (
             <a target="_blank" href={ book.volumeInfo.previewLink}>
             <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
             </a>
         ))}
         </div>
         <div className="col-2">
            <img src={bookImg} alt="book"/>
        </div>
    </div>
    </div>);
}
export default Books
