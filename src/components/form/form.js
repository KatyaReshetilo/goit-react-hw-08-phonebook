import s from './form.module.css';
import {
  useAddContactMutation,
  useFetchContactQuery,
} from '../../services/contactsAPI';

export default function Form() {
  const { data: contacts } = useFetchContactQuery();
  const [addContact] = useAddContactMutation();
  const onSubmit = e => {
    e.preventDefault();
    const { name, number } = e.currentTarget;
    const newContact = contacts.find(
      el => el.name.toLowerCase() === name.value.toLowerCase(),
    );

    newContact
      ? alert(`${name.value} is already in your contacts!`)
      : addContact({ name: name.value, number: number.value });

    name.value = '';
    number.value = '';
  };

  return (
    <form className={s.form} onSubmit={e => onSubmit(e)}>
      <label className={s.labelForm}>
        Name
        <input
          className={s.inputForm}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={s.labelForm}>
        Number
        <input
          className={s.inputForm}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={s.buttonForm} type="submit">
        Add contact
      </button>
    </form>
  );
}
