import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">Reserve Sonic</span>
                <div className="navItems">
                    <button className="navButton" style={{ margin: 0 }}>Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div >
    )
};

export default Navbar;