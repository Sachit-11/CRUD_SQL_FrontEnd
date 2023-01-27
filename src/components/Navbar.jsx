import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [icon, setIcon] = useState(true);
  return (
    <div className = "navbar">
        <h1 className = "brand">SG Book Shop</h1>
        <button className = "menu" onClick = {() => {
          setIcon(!icon)}}>
          {icon ? <GiHamburgerMenu/> : <ImCross/>}
        </button>
    </div>
  )
}

export default Navbar;
