// import Footer from "../../components/footer/Footer";
// import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

import "./home.css";

const Home = () => {
    return (
        <div>
            <Navbar />
            {/* <Header /> */}
            <div className="homeContainer">
                <h1 className="homeTitle">Browse by ...</h1>
                <h1 className="homeTitle">...</h1>
                {/* <Footer /> */}
            </div>
        </div>
    );
};

export default Home;