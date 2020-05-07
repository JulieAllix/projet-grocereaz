// Action Types
import { CHANGE_CONTACT_FIELD } from 'src/actions/contact';

// Initial State
const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  object: '',
  message: '',
};

// Reducer
const contactReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CONTACT_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };

    default:
      return state;
  }
};

export default contactReducer;
