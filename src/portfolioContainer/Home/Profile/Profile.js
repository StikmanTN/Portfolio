import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import {Link} from 'react-scroll';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/sami.zekri">
                <i className="fa fa-facebook-square"></i>
              </a>
              {/* <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a> */}
              <a href="https://www.instagram.com/Samzek/">
                <i className="fa fa-instagram"></i>
              </a>
              {/* <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a> */}
            </div>
          </div>

          <div className="portfolio-details-name">
            <span className="primary-text">
              {""}
              Hello , I'M <span className="highlighted-text">Sami</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "La capacité de travailler  rapidement.🌟",
                    2000,
                    "La capacité à donner une forme constitutive à une scène.🏜️",
                    2000,
                    "La capacité de créer de la lumière si c’est nécessaire.☀️",
                    2000,
                    "Une certaine connaissance de l’art classique.👑",
                    2000,
                    "Une ouverture d’esprit.❤️",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                J'aime les belles choses et j'aime les voir..
              </span>
            </span>
          </div>
          <div className="profile-options">
          <Link className="link" to="Contact" smooth={true} duration ={3000}>
            <button className="btn primary-btn">
              {""}
              Hire me{""}
            </button>
            </Link>
            {/* button utiliser pour telecharger un resumee , un cv ou document */}
              <a href="https://www.flickr.com/photos/samzek">
              <button className="btn highlighted-btn">Go to Flicker!</button>
              </a>
          </div>
        </div>
        <div className=" profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
