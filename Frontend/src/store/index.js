import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// middlewares
import loadMiddleware from 'src/middlewares/loadMiddleware';
import updateMiddleware from 'src/middlewares/updateMiddleware';
import authMiddleware from 'src/middlewares/authMiddleware';
import groceryMiddleware from 'src/middlewares/groceryMiddleware';
import contactMiddleware from 'src/middlewares/contactMiddleware';

// Reducer
import rootReducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    loadMiddleware,
    authMiddleware,
    updateMiddleware,
    groceryMiddleware,
    contactMiddleware,
  ),
);

const store = createStore(
  rootReducer,
  enhancers,
);

export default store;
