import "./footer.css";
import logo from '../navbar/logo.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContainer">
                <img src={logo} alt="Reserve Sonic logo" className="logo" />
                <div className="copyright">© Copyright 2022 | All rights reserved.</div>
            </div>
        </div>
    )
};

export default Footer;