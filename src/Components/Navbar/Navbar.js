import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import logo from "../../Images/logo.svg";

function Navbar(props) {
    const navigate=useNavigate();
    const {active}=props;
    return <div className="Navbar">
        <div>
            <img className="Logo" src={logo} alt="Logo" />
        </div>
        <hr className="rule" />
        <div className="Right">
            <button className={"links"+(active===0?" active":"")} onClick={() => {navigate("/")}}> <span className="number">00</span> HOME</button>
            <button className={"links"+(active===1?" active":"")} onClick={() => {navigate("/Destination")}}> <span className="number">01</span> DESTINATION</button>
            <button className={"links"+(active===2?" active":"")} onClick={() => {navigate("/Crew")}}> <span className="number">02</span> CREW</button>
            <button className={"links"+(active===3?" active":"")} onClick={() => {navigate("/Technology")}}> <span className="number">03</span> TECHNOLOGY</button>
        </div>
    </div>
}

export default Navbar;