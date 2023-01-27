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
    price: "",
    cover: ""
  });

  const bookId = location.state;

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
  }, [bookId])

  const [formErrors, setFormErrors] = useState({});

  const validate = (e) => {
    const errors = {};

    if (e.target.title.value === ""){
      errors.title = "Title is Required!";
    }

    if (e.target.price.value === ""){
      errors.price = "Price is Required!";
    }

    if (Object.keys(errors).length !== 0){
      setFormErrors(errors);
      return false;
    }

    return true;
  }
  
  const handleChange = (e) => {
    setBook({...book, [e.target.name]: e.target.value});
  }

  const handleClick = async (e) => {
    e.preventDefault();
    if (validate(e)){
      try{
        await axios.put(`${process.env.REACT_APP_BACKEND_SERVER}/${bookId}`, book);
        console.log("here");
        navigate("/");
      }
      catch(err){
        console.log(err);
      }
    }
  }
  
  return (
    <form onSubmit = {handleClick}>
      <h1>Update Book</h1>
      <input type = "text" placeholder = "title" name = "title" value = {book.title} onChange = {handleChange} />
      {formErrors.title && <div className = "formError"> {formErrors.title} </div>}
      <input type = "text" placeholder = "desc" name = "desc" value = {book.desc} onChange = {handleChange} />
      <input type = "number" placeholder = "price" name = "price" value = {book.price} onChange = {handleChange} />
      {formErrors.price && <div className = "formError"> {formErrors.price} </div>}
      <input type = "text" placeholder = "cover" name = "cover" value = {book.cover} onChange = {handleChange} />
      <button className = "formButton">
        Update
      </button>
    </form>
  )
}

export default Update;