import * as React from "react";
import {Link} from 'react-scroll';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import image1 from "../../assets/Home/Sam1.jpg";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default function About() {
  return (
    <div className="About-parent " id="About" data-aos="zoom-in">
      <div className="About-title">
        <span>About Me</span>
      </div>
      <div className="About-Why">
        <span>Pour quoi moi?</span>
      </div>
      <div className="hide-line">
        <div className="line"></div>
        <div className="blob-line">
          <div></div>
        </div>
      </div>
      <div className="container About">
        <Card className="row container-card" sx={{ maxWidth: 450 }}>
          <div className="container-img">
            <CardMedia
              className="image1"
              component="img"
              height="450"
              image={image1}
              alt="Sam"
            />
            {/* <img src = {image1}/> */}
          </div>
          <div className="container-info">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Sami Zekri
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <div className="highlight">
                  <div className="blob"></div>
                  <span>
                    Sami Zekri is a self-taught Tunisian professional
                    photographer.
                  </span>
                </div>
                <div className="highlight">
                  <div className="blob"></div>
                  <span>
                    I have learned as a child by watching my father take
                    pictures, and then I made up my mind to turn my passion into
                    a profession.
                  </span>
                </div>
                <div className="highlight">
                  <div className="blob"></div>
                  <span>
                    In 2019, I decided to travel and discover other countries as
                    well as reveal them to others through my humble vision.
                  </span>
                </div>
                <div className="highlight">
                  <div className="blob"></div>
                  <span>
                    I had the privilege of visiting Myanmar, taking these
                    photographs and falling in love with this country and its
                    people thanks to my friend Jean-Marc and what he told me
                    about them.
                  </span>
                </div>
                <div className="highlight">
                  <div className="blob"></div>
                  <span>
                    By mixing with the dwellers of Ward 67, I realised the
                    extent to which, despite the circumstances which had brought
                    them there, they were determined to progress and develop to
                    improve their living conditions and secure a better future
                    for their children.
                  </span>
                </div>
                <div className="highlight">
                  <div className="blob"></div>
                  <span>
                    I was very touched by their welcome, general kindness and
                    their generosity to one another. This solidarity has
                    inspired me.
                  </span>
                </div>
              </Typography>
            </CardContent>
            <div className="Btn-adds">
            <Link className="link" to="Contact" smooth={true} duration ={2000}>
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
        </Card>
      </div>
    </div>
  );
}
