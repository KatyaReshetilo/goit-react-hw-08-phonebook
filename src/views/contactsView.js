import Section from '../components/section/section';
import Form from '../components/form/form';
import Filter from '../components/filter/filter';
import Contacts from '../components/contacts/contacts';

export default function ContactsView() {
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </>
  );
}
