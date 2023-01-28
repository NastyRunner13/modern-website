import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3_navbar-links">
        <div className="gpt3_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}
