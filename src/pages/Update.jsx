import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation} from "react-router-dom";

import "./add_update.scss";

const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: ""
  });

  const bookId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchBook = async () => {
      try{
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/${bookId}`);
        setBook(res.data[0]);
      }
      catch(err){ 
        console.log(err);
      }
    }
    fetchBook();
  }, [])
  
  const handleChange = (e) => {
    setBook({...book, [e.target.name]: e.target.value});
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try{
      await axios.put(`${process.env.REACT_APP_BACKEND_SERVER}/${bookId}`, book);
      navigate("/");
    }
    catch(err){
      console.log(err);
    }
  }
  
  return (
    <div className = "form">
      <h1>Update Book</h1>
      <input type = "text" placeholder = "title" name = "title" value = {book.title} onChange = {handleChange} />
      <input type = "text" placeholder = "desc" name = "desc" value = {book.desc} onChange = {handleChange} />
      <input type = "number" placeholder = "price" name = "price" value = {book.price} onChange = {handleChange} />
      <input type = "text" placeholder = "cover" name = "cover" value = {book.cover} onChange = {handleChange} />
      <button onClick = {handleClick} className = "formButton">
        Update
      </button>
    </div>
  )
}

export default Update;