// Types
export const CHANGE_CONTACT_FIELD = 'CHANGE_CONTACT_FIELD';
export const SEND_MESSAGE = 'SEND_MESSAGE';

// Creators
export const changeContactField = (name, value) => ({
  type: CHANGE_CONTACT_FIELD,
  name,
  value,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

