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

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={s.head}>Login Page</h1>

      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={s.labelForm}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            className={s.inputForm}
            onChange={handleChange}
          />
        </label>

        <label className={s.labelForm}>
          Password
          <input
            type="password"
            name="password"
            className={s.inputForm}
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={s.buttonForm}>
          Log In
        </button>
      </form>
    </div>
  );
}
