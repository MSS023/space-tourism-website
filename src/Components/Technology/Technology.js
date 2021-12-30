import './Technology.css';
import Navbar from "../Navbar/Navbar";
import data from '../../Data/data.json';
import {useState} from 'react';

function Technology(props) {
    const [index,setIndex]=useState(0);
    return <div className="Technology">
        <section className="technology-top">
            <Navbar active={3} />
        </section>
        <section className="technology-bottom">
            <div className="technology-left">
                <h1 className="technology-title"><span>03</span> SPACE LAUNCH 101</h1>
                <div className="technology-container">
                    <div className="technology-buttons">
                        <button className={"technology-button" + (index===0?" active-technology":"")} onClick={() => {setIndex(0)}}>
                            1
                        </button>
                        <button className={"technology-button" + (index===1?" active-technology":"")} onClick={() => {setIndex(1)}}>
                            2
                        </button>
                        <button className={"technology-button" + (index===2?" active-technology":"")} onClick={() => {setIndex(2)}}>
                            3
                        </button>
                    </div>
                
                    <div className="technology-description">
                        <div className="technology-terminology">
                            THE TERMINOLOGY
                        </div>
                        <h1 className="technology-name">
                            {data.technology[index].name}
                        </h1>
                        <div className="technology-desc">
                            {data.technology[index].description}
                        </div>
                    </div>
                </div>
            </div>
            <div className="technology-right">
                <img className="technology-image" src={data.technology[index].images.portrait} alt="technology" />
            </div>
        </section>
    </div>
}

export default Technology;