// components/displayBook

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BookLists from "../BookList/BookList";

const DisplayBook = () => {
    const {infoBook, setInfoBook} = useState();

    useEffect(() => {
        axios
        .get("http://localhost:3000/api/bookapp")
        .then((res) => {
            console.log(res.data);
            setInfoBook(res.data)
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const deleteHandler = (e) => {
        axios.delete(`http://localhost:3000/api/bookapp/ ${e.target.title}`);
        setInfoBook((data) => {
            return data.filter((book) => book._id !== e.target.title);
        });
    };

    return (
        <section className="book-container">
            <Link to="/add-book" className="book-btn-new"></Link>
                <button className="book-btn">Add new book</button>
            </Link>
            <section className="book-data">
                <h1></h1>
        <ul className="book-list-block">
            {infoBook.map((data) => (
                <BookCard data={data} deleteHandler={deleteHandler} />
            ))}
        </ul>
        </section>
        </section>
    );
};

export default DisplayBook;