// == Import npm
import React from 'react';
import { Icon } from 'semantic-ui-react';
import presentationData from 'src/assets/data/dataPresentations';
// == Import
import AboutUsStyled from './AboutUsStyled';

// == Composant
const AboutUs = () => (
  <AboutUsStyled>
    <div className="team-member-wrapper">
      <div className="image left">
        <img
          src={presentationData[0].picture}
          alt={presentationData[0].name}
          className="image-size"
        />
      </div>
      <div className="presentation-wrapper">
        <h3 className="name"><a href={presentationData[0].linkedIn}>{presentationData[0].name}</a></h3>
        <h4 className="role">{presentationData[0].role}</h4>
        <div className="presentation-big">
          <div className="quote-left">
            <Icon name="quote left" size="big" color="orange" />
          </div>
          <p className="presentation">{presentationData[0].text}</p>
          <div className="quote-right">
            <Icon name="quote right" size="big" color="orange" />
          </div>
        </div>
      </div>
    </div>
    <div className="presentation-small">
      <div className="quote-left">
        <Icon name="quote left" size="big" color="orange" />
      </div>
      <p className="presentation">{presentationData[0].text}</p>
      <div className="quote-right">
        <Icon name="quote right" size="big" color="orange" />
      </div>
    </div>

    <div className="team-member-right-big">
      <div className="team-member-wrapper">
        <div className="presentation-wrapper">
          <h3 className="name"><a href={presentationData[1].linkedIn}>{presentationData[1].name}</a></h3>
          <h4 className="role">{presentationData[1].role}</h4>
          <div className="presentation-big">
            <div className="quote-left">
              <Icon name="quote left" size="big" color="orange" />
            </div>
            <p className="presentation">{presentationData[1].text}</p>
            <div className="quote-right">
              <Icon name="quote right" size="big" color="orange" />
            </div>
          </div>
        </div>
        <div className="image right">
          <img
            src={presentationData[1].picture}
            alt={presentationData[1].name}
            className="image-size"
          />
        </div>
      </div>
    </div>

  <div className="team-member-right-small">
    <div className="team-member-wrapper">
      <div className="image right">
        <img
          src={presentationData[1].picture}
          alt={presentationData[1].name}
          className="image-size"
        />
      </div>
      <div className="presentation-wrapper">
        <h3 className="name"><a href={presentationData[1].linkedIn}>{presentationData[1].name}</a></h3>
        <h4 className="role">{presentationData[1].role}</h4>
      </div>
    </div>
    <div className="presentation-small">
      <div className="quote-left">
        <Icon name="quote left" size="big" color="orange" />
      </div>
      <p className="presentation">{presentationData[1].text}</p>
      <div className="quote-right">
        <Icon name="quote right" size="big" color="orange" />
      </div>
    </div>
  </div>


    <div className="team-member-wrapper">
      <div className="image left">
        <img
          src={presentationData[2].picture}
          alt={presentationData[2].name}
          className="image-size"
        />
      </div>
      <div className="presentation-wrapper">
        <h3 className="name"><a href={presentationData[2].linkedIn}>{presentationData[2].name}</a></h3>
        <h4 className="role">{presentationData[2].role}</h4>
        <div className="presentation-big">
          <div className="quote-left">
            <Icon name="quote left" size="big" color="orange" />
          </div>
          <p className="presentation">{presentationData[2].text}</p>
          <div className="quote-right">
            <Icon name="quote right" size="big" color="orange" />
          </div>
        </div>
      </div>
    </div>
    <div className="presentation-small">
      <div className="quote-left">
        <Icon name="quote left" size="big" color="orange" />
      </div>
      <p className="presentation">{presentationData[2].text}</p>
      <div className="quote-right">
        <Icon name="quote right" size="big" color="orange" />
      </div>
    </div>

    <div className="team-member-right-big">
      <div className="team-member-wrapper">
        <div className="presentation-wrapper">
          <h3 className="name"><a href={presentationData[3].linkedIn}>{presentationData[3].name}</a></h3>
          <h4 className="role">{presentationData[3].role}</h4>
          <div className="presentation-big">
            <div className="quote-left">
              <Icon name="quote left" size="big" color="orange" />
            </div>
            <p className="presentation">{presentationData[3].text}</p>
            <div className="quote-right">
              <Icon name="quote right" size="big" color="orange" />
            </div>
          </div>
        </div>
        <div className="image right">
          <img
            src={presentationData[3].picture}
            alt={presentationData[3].name}
            className="image-size"
          />
        </div>
      </div>
    </div>

  <div className="team-member-right-small">
    <div className="team-member-wrapper">
      <div className="image right">
        <img
          src={presentationData[3].picture}
          alt={presentationData[3].name}
          className="image-size"
        />
      </div>
      <div className="presentation-wrapper">
        <h3 className="name"><a href={presentationData[3].linkedIn}>{presentationData[3].name}</a></h3>
        <h4 className="role">{presentationData[3].role}</h4>
      </div>
    </div>
    <div className="presentation-small">
      <div className="quote-left">
        <Icon name="quote left" size="big" color="orange" />
      </div>
      <p className="presentation">{presentationData[3].text}</p>
      <div className="quote-right">
        <Icon name="quote right" size="big" color="orange" />
      </div>
    </div>
  </div>

  </AboutUsStyled>
);

// == Export
export default AboutUs;
