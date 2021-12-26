import './Crew.css';
import Navbar from '../Navbar/Navbar';
import data from '../../Data/data.json';
import {useState} from 'react';

function Crew(props) {
    const [index,setIndex]=useState(0);
    return <div className="Crew">
        <section className="top">
            <Navbar active={2} />
        </section>
        <section className="bottom">
            <div className="crew-left">
                <h1 className="title"><span>02</span> MEET YOUR CREW</h1>
                <div className="crew-details">
                    <div className="crew-role">{data.crew[index].role}</div>
                    <div className="crew-name">{data.crew[index].name}</div>
                    <div className="crew-desc">{data.crew[index].bio}</div>
                    <div className="carousel-buttons">
                        <button className={"carousel-button" + (index===0?" active-button":"")} onClick={() => {setIndex(0)}}></button>
                        <button className={"carousel-button" + (index===1?" active-button":"")} onClick={() => {setIndex(1)}}></button>
                        <button className={"carousel-button" + (index===2?" active-button":"")} onClick={() => {setIndex(2)}}></button>
                        <button className={"carousel-button" + (index===3?" active-button":"")} onClick={() => {setIndex(3)}}></button>
                    </div>
                </div>
            </div>
            <div className="crew-right">
                <img className="crew-image" src={data.crew[index].images.webp} alt={data.crew[index].name} />
            </div>
        </section>
    </div>
}

export default Crew;