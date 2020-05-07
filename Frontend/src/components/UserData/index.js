// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button, Input, Icon } from 'semantic-ui-react';

// == Import
import ModalConfirmUpdate from './ModalConfirmUpdate';
import image from 'src/assets/images/V2/pasta-1.png';
import FormStyled from 'src/components/FormStyled';

// == Composant
const UserData = ({
  // firstname,
  // lastname,
  // email,
  changeFieldValue,
  updateData,
}) => {
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  console.log('userData dans userData', userData);
  const [isTransparent, setIsTransparent] = useState(true);

  const classCss = classNames('validData', {
    'validData--transparent': isTransparent,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('Personnal Data  handleSubmit ok');
    updateData();
  };

  const handleChange = (evt) => {
    // console.log(evt.target.name, evt.target.value);
    changeFieldValue(evt.target.name, evt.target.value);
  };

  const handleClick = () => {
    console.log('HandleClick click');
    setIsTransparent(!isTransparent);
  }
  return (
    <FormStyled>
      <section className="content-part">
        <h2>
          Personal data
          {/*
          <Icon link size="small" name="pencil" onClick={handleClick} />
          */}
        </h2>
        {/*
        <form className="form" onSubmit={handleSubmit}>
        */}
          <div className="user-data-wrapper">
          <ul className="user-data-list">
            <li className="user-data">
              <em className="user-data-label">Firstname :</em>
              <div className="user-data-value">{userData.firstname}</div></li>
            <li className="user-data">
              <em className="user-data-label">Lastname :</em>
              <div className="user-data-value">
                {userData.lastname}
              </div>
            </li>
            <li className="user-data">
              <em className="user-data-label">E-mail :</em>
              <div className="user-data-value">
                {userData.email}
              </div>
            </li>
          </ul>
          {/*
            <Input
              className="datasInput"
              size="large"
              type="text"
              name="firstname"
              transparent={isTransparent}
              disabled={isTransparent}
              autoComplete="off"
              value={userData.firstname}
              onChange={handleChange}
            />
            <Input
              className="datasInput"
              size="large"
              type="text"
              name="lastname"
              transparent={isTransparent}
              disabled={isTransparent}
              autoComplete="off"
              value={userData.lastname}
              onChange={handleChange}
            />

            <Input
              className="datasInput"
              size="large"
              type="email"
              name="email"
              fluid
              transparent={isTransparent}
              disabled={isTransparent}
              autoComplete="off"
              value={userData.email}
              onChange={handleChange}
            />
            */}
          </div>
          {/*
          <ModalConfirmUpdate />
          
        </form>
      */}
      </section>
      <section className="picture-part">
        <div className="image">
          <img
            src={image}
            alt="A delicious plate of pastas."
            className="image-size"
          />
        </div>
      </section>
    </FormStyled>
  );
};

// == Export
export default UserData;

