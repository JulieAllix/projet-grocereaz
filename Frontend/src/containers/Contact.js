import { connect } from 'react-redux';
import Contact from 'src/components/Contact';

// Action Creators
import { changeContactField, sendMessage } from 'src/actions/contact';

// == Data / state
const mapStateToProps = (state) => ({
  firstnameValue: state.contact.firstname,
  lastnameValue: state.contact.lastname,
  emailValue: state.contact.email,
  objectValue: state.contact.object,
  messageValue: state.contact.message,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  changeContactFieldValue: (name, value) => {
    dispatch(changeContactField(name, value));
  },
  sendMessage: () => {
    dispatch(sendMessage());
  },
});

// connect(redux)(react)
const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact);

export default ContactContainer;
