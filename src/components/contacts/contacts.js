import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import s from './contacts.module.css';
import { contactsSelections } from '../../redux/contacts';
import {
  useFetchContactQuery,
  useDeleteContactMutation,
} from '../../services/contactsAPI';

export default function Contacts() {
  const { data: contacts } = useFetchContactQuery();

  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector(contactsSelections.filter);
  const trimFilter = filter.trim() === '';

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <ul>
      {trimFilter
        ? contacts &&
          contacts.map(({ id, name, number }) => {
            return (
              <li key={id} id={id} className={s.contactItem}>
                {name}: {number}
                <button
                  className={s.delete}
                  type="button"
                  onClick={() => deleteContact(id)}
                >
                  Delete
                </button>
              </li>
            );
          })
        : getVisibleContacts().map(({ id, name, number }) => {
            return (
              <li key={id} id={id} className={s.contactItem}>
                {name}: {number}
                <button
                  className={s.delete}
                  type="button"
                  onClick={() => deleteContact(id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
    </ul>
  );
}
Contacts.propTypec = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
