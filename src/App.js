import "./App.css";
import img2 from "./images/img2.svg";
import Typical from "react-typical";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <a href="/" className="navbar__logo">
          TRIP.
        </a>
        <div className="navbar__bars">
          <i class="fas fa-bars"></i>
        </div>
        <div className="navbar__menu">
          <a href="/" className="navbar__menu--links">
            Home
          </a>
          <a href="/" className="navbar__menu--links">
            Programs
          </a>
          <a href="/" className="navbar__menu--links">
            About us
          </a>
          <a href="/" className="navbar__menu--links" id="button">
            Login
          </a>
        </div>
      </nav>
      <div className="hero">
        <div className="hero_container">
          <div className="hero_container-left">
            <h3>
              Enjoy your trip with us {""}
              <Typical
                steps={[
                  "Camping !",
                  2000,
                  "World tour !",
                  2000,
                  "Holidays !",
                  2000,
                  "Festivals !",
                  2000,
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </h3>
            <button className="hero_container-btn">
              <a href="#">Join us</a>
            </button>
          </div>
          <div className="hero_container-right">
            <img className="hero_container-img" src={img2} alt="alien" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
