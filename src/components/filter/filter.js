import { useDispatch } from 'react-redux';
import contactsAction from '../../redux/contacts/contacts-actions';
import PropTypes from 'prop-types';
import s from './filter.module.css';
export default function Filter() {
  const dispatch = useDispatch();
  return (
    <label>
      <h3 className={s.headFilter}>Find contacts by name</h3>
      <input
        className={s.inputFilter}
        type="text"
        onChange={e => dispatch(contactsAction.doFilter(e.target.value))}
      />
    </label>
  );
}
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
