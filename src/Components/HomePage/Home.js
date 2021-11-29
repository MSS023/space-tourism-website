import "./Home.css";
import Navbar from "../Navbar/Navbar";

function Home() {
    return <div className="Home">
        <section className="top">
            <Navbar active={0} />
        </section>
        <section className="bottom">
            <div className="left">
                <div className="Text">
                    <p className="first">SO, YOU WANT TO TRAVEL TO</p>
                    <h1 className="second">SPACE</h1>
                    <p className="third">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
            </div>
            <div className="right">
                <button className="Explore">EXPLORE</button>
            </div>
        </section>
    </div>
}

export default Home;