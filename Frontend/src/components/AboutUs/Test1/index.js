// == Import npm
import React from 'react';
import photoJulie from 'src/assets/images/julie.JPG';
import photoVincent from 'src/assets/images/vincent.jpg';
import photoPy from 'src/assets/images/py.jpg';
import photoDavid from 'src/assets/images/david.jpg';
// == Import
import AboutUsStyled from './AboutUsStyled';

// == Composant
const AboutUs = () => (
  <AboutUsStyled>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="image">
            <img
              src={photoDavid}
              alt="David Fommard"
              className="image-size"
            />
            <div className="card-section-wrapper">
              <h3 className="name">David Fommard</h3>
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <h3 className="name name-card-back">David Fommard</h3>
          <h4 className="role">Frontend Lead Dev</h4>
          <p>Presentation</p>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="image">
            <img
              src={photoJulie}
              alt="Julie Allix"
              className="image-size"
            />
            <div className="card-section-wrapper">
              <h3 className="name">Julie Allix</h3>
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <h3 className="name name-card-back">Julie Allix</h3>
          <h4 className="role">Product Owner / Graphic design</h4>
          <p>Presentation</p>
        </div>
      </div>
    </div>

    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="image">
            <img
              src={photoPy}
              alt="Pierre-Yves Donzé"
              className="image-size"
            />
            <div className="card-section-wrapper">
              <h3 className="name">Pierre-Yves Donzé</h3>
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <h3 className="name name-card-back">Pierre-Yves Donzé</h3>
          <h4 className="role">Scrum Master / Dev Ops</h4>
          <p>Presentation</p>
        </div>
      </div>
    </div>

    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="image">
            <img
              src={photoVincent}
              alt="Vincent Labarthe"
              className="image-size"
            />
            <div className="card-section-wrapper">
              <h3 className="name">Vincent Labarthe</h3>
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <h3 className="name name-card-back">Vincent Labarthe</h3>
          <h4 className="role">Backend Lead Dev</h4>
          <p>Presentation</p>
        </div>
      </div>
    </div>

  </AboutUsStyled>
);


// == Export
export default AboutUs;
