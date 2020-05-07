// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, TextArea } from 'semantic-ui-react';
// == Import
import Field from 'src/components/Field';
import image from 'src/assets/images/cherry.png';
import FormStyled from 'src/components/FormStyled';

// == Composant
const Contact = ({
  firstnameValue,
  lastnameValue,
  emailValue,
  objectValue,
  changeContactFieldValue,
  messageValue,
  sendMessage,
}) => {
  // may be usefull for field autocompletion
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  console.log(userData);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('submit');
    sendMessage();
  };

  const handleChange = (evt) => {
    // console.log(evt.target.name, evt.target.value);
    changeFieldValue(evt.target.name, evt.target.value);
  };
  return (
    <FormStyled>
      <section className="content-part">
        <h2>Contact</h2>
        <Form onSubmit={handleSubmit}>
          <div className="form">
            <Field
              value={firstnameValue}
              changeValue={changeContactFieldValue}
              placeholder="Firstname"
              name="firstname"
              type="text"
              validField={true}
              emptyField={true}
            />
            <Field
              value={lastnameValue}
              changeValue={changeContactFieldValue}
              placeholder="Lastname"
              name="lastname"
              type="text"
              validField={true}
              emptyField={true}
            />
            <Field
              value={emailValue}
              changeValue={changeContactFieldValue}
              placeholder="Email"
              name="email"
              type="email"
              validField={true}
              emptyField={true}
            />
            <Field
              value={objectValue}
              changeValue={changeContactFieldValue}
              placeholder="Object"
              name="object"
              type="text"
              validField={true}
              emptyField={true}
            />
            <div className="form-text-area" >
              <TextArea
                value={messageValue}
                onChange={handleChange}
                name="message"
                placeholder="Your message..."
                rows="3"
              />
            </div>
            <Button className="form-validation" color="grey" type="submit">
              Submit
            </Button>
          </div>
        </Form>

      </section>
      <section className="picture-part">
        <div className="image">
          <img
            src={image}
            alt="A hand holding cherries"
            className="image-size"
          />
        </div>

      </section>
    </FormStyled>
  );
};

Contact.propTypes = {
  firstnameValue: PropTypes.string.isRequired,
  lastnameValue: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
  changeContactFieldValue: PropTypes.func.isRequired,
};

// == Export
export default Contact;
