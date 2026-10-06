import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import styles from './App.module.css';

export const App = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <main className={styles.page}>
      <h1>Книга контактів</h1>
      <section className={styles.section}>
        <h2>Додати контакт</h2>
        <ContactForm />
      </section>
      <section className={styles.section}>
        <h2>Контакти</h2>
        <Filter />
        <ContactList contacts={contacts} />
      </section>
    </main>
  );
};
