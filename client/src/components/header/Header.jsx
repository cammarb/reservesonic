import { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faGuitar, faMagnifyingGlass, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [btnState, setBtnState] = useState(false);

    function handleClick() {
        setBtnState(btnState => !btnState);
    };

    let toggleClassCheck = btnState ? 'active' : null;

    return (
        <div className="header">
            <div className="headerContainer">
                <div className="optionsContainer">
                    <div className="optionsButtons">
                        <button className={`${toggleClassCheck}`} onClick={handleClick}>
                            <FontAwesomeIcon icon={faMusic} />
                            Make a reservation
                        </button>
                        <button className={`${toggleClassCheck}`} onClick={handleClick}>
                            <FontAwesomeIcon icon={faGuitar} />
                            Rent your studio
                        </button>
                    </div>
                    {btnState && (
                        <div className="optionsCTAContainer">
                            <h1>Ready to play?</h1>
                            <button className="CTAbutton">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                Look for a studio
                            </button>
                        </div>
                    )}
                    <div className="optionsCTAContainer">
                        <h1>Get more exposure for your rehearsal room and/or studio</h1>
                        <button className="CTAbutton">
                            <FontAwesomeIcon icon={faPenToSquare} />
                            Register your locale
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;