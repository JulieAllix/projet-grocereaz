// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch, Redirect, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import Header from 'src/containers/Header';
import NavbarUser from 'src/containers/NavbarUser';
import Home from 'src/containers/Home/Home';
import GroceryLists from 'src/containers/GroceryLists';
import GroceryList from 'src/containers/GroceryList';
import UserData from 'src/containers/UserData';
import SignUp from 'src/containers/SignUp';
import SignIn from 'src/containers/SignIn';
import Footer from 'src/components/Footer';
import MobileNavbar from 'src/containers/MobileNavbar';
import ForgottenPwd from 'src/containers/ForgottenPwd';
import ResetPwd from 'src/containers/ResetPwd';
import FavoriteRecipes from 'src/containers/FavoriteRecipes';
import AboutUs from 'src/components/AboutUs';
import ErrorModal from 'src/components/ErrorModal';
import ModalSearchError from './ModalSearchError';
import ModalAddedToList from './ModalAddedToList';
import ModalAddedToFavorite from './ModalAddedToFavorite';
import ModalRemoveFromFavorite from './ModalRemoveFromFavorite';
import Contact from 'src/containers/Contact';


import GlobalStyles from 'src/styles/GlobalStyles';
import AppStyled from './AppStyled';

// == Composant
const App = ({
  isConnected,
  loadData,
  errorStatus,
  addToListStatus,
  addToFavoriteStatus,
  removeFromFavoriteStatus,
}) => {
  // console.log(isConnected);
  useEffect(() => {
    const userToken = sessionStorage.getItem('userToken');
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    // console.log(userData);
    if (userToken !== null) {
      loadData(userData);
    };
  }, []);
  return (
    <AppStyled>
      <ModalSearchError errorStatus={errorStatus} />
      <ModalAddedToList addToListStatus={addToListStatus} userConnected={isConnected}/>
      <ModalAddedToFavorite addToFavoriteStatus={addToFavoriteStatus} />
      <ModalRemoveFromFavorite removeFromFavoriteStatus={removeFromFavoriteStatus} />
      <GlobalStyles />
      <div className="top-page">
        <Header />
        <NavbarUser />
      </div>
      <div className="middle-page">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/grocery-lists" component={GroceryLists} />
          <Route exact path="/grocery-lists/:id" component={GroceryList} />
          <Route exact path="/user-data" component={UserData} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/forgotten-pwd" component={ForgottenPwd} />
          <Route exact path="/reset-pwd/:token" component={ResetPwd} />
          <Route exact path="/favorite-recipes" component={FavoriteRecipes} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about-us" component={AboutUs} />
          <Redirect to="/" />
          <Route component={ErrorModal} />
        </Switch>
        <div className="footer-mobile">
          <Footer />
        </div>
      </div>
      <div className="footer-desktop">
        <Footer />
      </div>
      <div className="mobile-navbar">
        <MobileNavbar />
      </div>
    </AppStyled>
  );
};

App.propTypes = {
  errorStatus: PropTypes.bool.isRequired,
  addToListStatus: PropTypes.bool.isRequired,
  addToFavoriteStatus: PropTypes.bool.isRequired,
  isConnected: PropTypes.bool.isRequired,
  removeFromFavoriteStatus: PropTypes.bool.isRequired,
};
// == Export
export default App;
