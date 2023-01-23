import { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation} from "react-router-dom";

import "./add_update.scss";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  
  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

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
      <input type = "text" placeholder = "title" name = "title" onChange = {handleChange} />
      <input type = "text" placeholder = "desc" name = "desc" onChange = {handleChange} />
      <input type = "number" placeholder = "price" name = "price" onChange = {handleChange} />
      <input type = "text" placeholder = "cover" name = "cover" onChange = {handleChange} />
      <button onClick = {handleClick} className = "formButton">
        Update
      </button>
    </div>
  )
}
  
export default Update;
  