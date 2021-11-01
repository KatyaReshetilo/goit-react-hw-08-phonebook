import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import s from './views.module.css';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={s.head}>Registration Page</h1>

      <form className={s.form} autoComplete="off" onSubmit={handleSubmit}>
        <label className={s.labelForm} onChange={handleChange}>
          Name
          <input className={s.inputForm} type="text" name="name" />
        </label>

        <label className={s.labelForm} onChange={handleChange}>
          Email
          <input className={s.inputForm} type="email" name="email" />
        </label>

        <label className={s.labelForm} onChange={handleChange}>
          Password
          <input className={s.inputForm} type="password" name="password" />
        </label>

        <button className={s.buttonForm} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
