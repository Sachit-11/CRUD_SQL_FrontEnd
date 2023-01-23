import "./error.scss";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className = "error">
      <h1> ERROR 404 </h1>
      <span> Page Not Found </span>
      <p> 
        We can't seem to find the page you are looking for
      </p>
      <Link to = "/">
        <button>
          Back to Safety
        </button>
      </Link>
    </div>
  )
}

export default Error;
