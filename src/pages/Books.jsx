import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./books.scss";

const Books = () => {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    const fetchAllBooks = async () => {
      try{
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_SERVER}`);
        setBooks(res.data);
      }
      catch(err){ 
        console.log(err);
      }
    }
    fetchAllBooks();
  }, [])

  const handleDelete = async (id) => {
    try{
      await axios.delete(`${process.env.REACT_APP_BACKEND_SERVER}/${id}`);
      window.location.reload();
    }
    catch(err){
      console.log(err);
    }
  }

  return (  
    <div className = "booksMain">
      <h1>SG's Book Shop</h1>
      <div className = "books">
        {books.map((book) => {
          return(
            <div className = "book" key = {book.id}>
              {book.cover && <img src = {book.cover} alt = "" />}
              <h2>{book.title}</h2>
              <p>{book.desc}</p>
              <p>{book.price}</p>
              <button className = "delete" onClick = {() => handleDelete(book.id)}>Delete</button>
              <Link to = {`/update/${book.id}`}>
                <button className = "update">Update</button>
              </Link>
            </div>
          )
        })} 
      </div>
      <Link to = "/add">
        <button className = "addBook">
          Add New Book
        </button>
      </Link>
    </div>
  )
}
  
export default Books;