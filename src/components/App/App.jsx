import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import styles from './App.module.css';

export const App = () => {
  const contacts = useSelector(selectVisibleContacts);
  const totalContacts = useSelector(state => state.contacts.length);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.brand}>
            <span className={styles.brandIcon} aria-hidden="true">
              ✳
            </span>
            <span>Контакти</span>
          </div>
          <span className={styles.headerNote}>Твоя адресна книга</span>
        </header>

        <section className={styles.intro}>
          <span className={styles.eyebrow}>УПОРЯДКУЙ СВОЄ КОЛО</span>
          <h1 className={styles.title}>Книга контактів</h1>
          <p className={styles.description}>
            Усі важливі люди — в одному місці.
          </p>
        </section>

        <div className={styles.workspace}>
          <section className={styles.formPanel} aria-labelledby="form-title">
            <div className={styles.sectionHeading}>
              <span className={styles.sectionIcon} aria-hidden="true">
                +
              </span>
              <div>
                <h2 className={styles.sectionTitle} id="form-title">
                  Новий контакт
                </h2>
                <p className={styles.sectionDescription}>
                  Додай когось до своєї книги
                </p>
              </div>
            </div>
            <ContactForm />
          </section>

          <section
            className={styles.contactsPanel}
            aria-labelledby="contacts-title"
          >
            <div className={styles.contactsHeader}>
              <div>
                <span className={styles.eyebrow}>ТВОЄ КОЛО</span>
                <h2 className={styles.contactsTitle} id="contacts-title">
                  Контакти
                  <span className={styles.count}>{totalContacts}</span>
                </h2>
              </div>
              <Filter />
            </div>
            <ContactList contacts={contacts} />
          </section>
        </div>

        <footer className={styles.footer}>
          Контакти зберігаються автоматично на цьому пристрої
          <span className={styles.footerDot} aria-hidden="true">
            ·
          </span>
          Твої дані залишаються приватними
        </footer>
      </div>
    </main>
  );
};
