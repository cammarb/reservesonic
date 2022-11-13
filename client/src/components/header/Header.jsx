import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faGuitar, faCalendarDays, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="optionsContainer">
                    <div className="optionsButtons">
                        <button className="optionButton">
                            <FontAwesomeIcon icon={faMusic} />
                            Make a reservation
                        </button>
                        <button className="optionButton">
                            <FontAwesomeIcon icon={faGuitar} />
                            Rent your studio
                        </button>
                    </div>
                    <div className="optionsCTAContainer">
                        <h1>Ready to play?</h1>
                        <button>
                            <FontAwesomeIcon icon={faCalendarDays} />
                            Book a room:
                        </button>
                    </div>
                    <div className="optionsCTAContainer">
                        <h1>Get more exposure for your rehearsal room and/or studio</h1>
                        <button>
                            <FontAwesomeIcon icon={faPenToSquare} />
                            Register your locale:
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;