import "./navbar.css";
import logo from './logo.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <img src={logo} alt="Reserve Sonic logo" className="logo" />
                <div className="navItems">
                    <button className="navButton loginButton">Login</button>
                    <button className="navButton">Register</button>
                </div>
            </div>
        </div >
    )
};

export default Navbar;