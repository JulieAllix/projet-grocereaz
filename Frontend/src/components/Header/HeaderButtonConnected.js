import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Image } from 'semantic-ui-react';


const HeaderButtonConnected = ({ 
  firstname, 
  lastname, 
  logout,
}) => {
  const handleClick = () => {
    // evt.preventDefault();
    console.log('HeaderButtonConnected handleClick: ok');
    logout();
    sessionStorage.clear();
    window.location.href = process.env.URL_FRONT;
  };
  // console.log(firstname, lastname);
  return (
    <div className="dropdown">
      <Dropdown text={`${firstname} ${lastname}`}>
        <Dropdown.Menu>
          {/*<div className="dropdown-option">
            <Link to="/user">
              <Dropdown.Item text="Account" />
            </Link>
          </div>*/}
          <div className="dropdown-option">
            <Link to="/">
              <Dropdown.Item text="Sign out" onClick={handleClick} />
            </Link>
          {/*
            <form onSubmit={handleSubmit}>
              <button>
                <Dropdown.Item text="Sign out" />
              </button>
            </form>
            */}
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default HeaderButtonConnected;
