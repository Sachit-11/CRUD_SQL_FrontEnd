import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./add_update.scss";

const Add = () => {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: "",
    cover: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validate = (e) => {
    const errors = {};

    if (e.target.title.value === ""){
      errors.title = "Title is Required!";
    }

    if (e.target.price.value === ""){
      errors.price = "Price is Required!";
    }

    if (Object.keys(errors).length != 0){
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
        await axios.post(`${process.env.REACT_APP_BACKEND_SERVER}`, book);
        navigate("/");
      }
      catch(err){
        console.log(err);
      }
    }
  }
  
  return (
    <form onSubmit = {handleClick}>
      <h1>Add New Book</h1>
      <input type = "text" placeholder = "title" name = "title" onChange = {handleChange} />
      {formErrors.title && <div className = "formError"> {formErrors.title} </div>}
      <input type = "text" placeholder = "desc" name = "desc" onChange = {handleChange} />
      <input type = "number" placeholder = "price" name = "price" onChange = {handleChange} />
      {formErrors.price && <div className = "formError"> {formErrors.price} </div>}
      <input type = "text" placeholder = "cover" name = "cover" onChange = {handleChange} />
      <button>
        Add
      </button>
    </form>
  )
}
  
export default Add;