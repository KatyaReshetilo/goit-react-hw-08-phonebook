import { createAction } from '@reduxjs/toolkit';

const doFilter = createAction('contacts/filter');
const contactsAction = {
  doFilter,
};
export default contactsAction;
