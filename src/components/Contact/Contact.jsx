import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './Contact.module.css';

const getInitials = name =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map(part => part[0])
    .join('')
    .toLocaleUpperCase();

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <span className={styles.avatar} aria-hidden="true">
        {getInitials(contact.name)}
      </span>
      <div className={styles.details}>
        <p className={styles.name}>{contact.name}</p>
        <a
          className={styles.number}
          href={`tel:${contact.number.replace(/[^\d+]/g, '')}`}
        >
          <span className={styles.phoneIcon} aria-hidden="true">
            ↗
          </span>
          {contact.number}
        </a>
      </div>
      <button
        aria-label={`Видалити контакт ${contact.name}`}
        className={styles.deleteButton}
        onClick={() => dispatch(deleteContact(contact.id))}
        type="button"
      >
        <svg
          aria-hidden="true"
          fill="none"
          height="16"
          viewBox="0 0 24 24"
          width="16"
        >
          <path
            d="M4 7h16M10 11v6m4-6v6M5.5 7l1 13h11l1-13M9 7V4h6v3"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </svg>
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
