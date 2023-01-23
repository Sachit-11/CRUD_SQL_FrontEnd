import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./add_update.scss";

const Add = () => {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const handleChange = (e) => {
    setBook({...book, [e.target.name]: e.target.value});
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try{
      await axios.post(`${process.env.REACT_APP_BACKEND_SERVER}`, book);
      navigate("/");
    }
    catch(err){
      console.log(err);
    }
  }
  
  return (
    <div className = "form">
      <h1>Add New Book</h1>
      <input type = "text" placeholder = "title" name = "title" onChange = {handleChange} />
      <input type = "text" placeholder = "desc" name = "desc" onChange = {handleChange} />
      <input type = "number" placeholder = "price" name = "price" onChange = {handleChange} />
      <input type = "text" placeholder = "cover" name = "cover" onChange = {handleChange} />
      <button onClick = {handleClick}>
        Add
      </button>
    </div>
  )
}
  
export default Add;
  