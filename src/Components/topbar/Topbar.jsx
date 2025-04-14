import "./topbar.css";
import { Link, NavLink } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <img
          src="./src/assets/Gfusc logo.jpg"
          alt="club-logo"
          className="logo"
        />
        <p>Great Friends United Sports Club</p>
      </div>
      <div className="topbarRight">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/videos">Videos</NavLink>
        <NavLink to="/team">Team</NavLink>
        <NavLink to="/membership" >Membership</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/about">About Us</NavLink>
      </div>
    </div>
  );
};

export default Topbar;
