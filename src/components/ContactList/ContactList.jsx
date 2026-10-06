import PropTypes from 'prop-types';
import { Contact } from '../Contact/Contact';
import styles from './ContactList.module.css';

export const ContactList = ({ contacts }) => {
  if (contacts.length === 0) {
    return (
      <div className={styles.empty}>
        <p className={styles.emptyTitle}>Тут поки тихо</p>
        <p className={styles.emptyText}>
          Додай перший контакт або зміни пошуковий запит.
        </p>
      </div>
    );
  }

  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
