import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./books.scss";


const Books = () => {

  const navigate = useNavigate();
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
      <div className = "books">
        {books?.map((book) => {
          return(
            <div className = "book" key = {book.id}>

              {book.cover ? <img src = {book.cover} alt = "" /> : <img src = "https://drupal.nypl.org/sites-drupal/default/files/blogs/J5LVHEL.jpg" alt = "" />}

              <h2>{book.title}</h2>

              <p>{book.desc ? book.desc : "No description available"}</p>

              <p>{book.price}</p>

              <button className = "delete" onClick = {() => handleDelete(book.id)}>Delete</button>

              <button className = "update" onClick = {() => {
                navigate("/update", {state: book.id})}}>
                Update
              </button>

            </div>
          )
        })} 
      </div>

      <button className = "addBook" onClick = {() => {
        navigate("/add");
      }}>
        Add New Book
      </button>
    </div>
  )
}
  
export default Books;