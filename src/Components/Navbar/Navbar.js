import "./Navbar.css";
import logo from "../../Images/logo.svg";

function Navbar(props) {
    const {active}=props;
    return <div className="Navbar">
        <div>
            <img className="Logo" src={logo} alt="Logo" />
        </div>
        <hr />
        <div className="Right">
            <button className={"links"+(active===0?" active":"")}> <span className="number">00</span> HOME</button>
            <button className={"links"+(active===1?" active":"")}> <span className="number">01</span> DESTINATION</button>
            <button className={"links"+(active===2?" active":"")}> <span className="number">02</span> CREW</button>
            <button className={"links"+(active===3?" active":"")}> <span className="number">03</span> TECHNOLOGY</button>
        </div>
    </div>
}

export default Navbar;