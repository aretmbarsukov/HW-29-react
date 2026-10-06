import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './Contact.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <span>{contact.name}</span>
      <a href={`tel:${contact.number.replace(/[^\d+]/g, '')}`}>
        {contact.number}
      </a>
      <button
        aria-label={`Видалити контакт ${contact.name}`}
        onClick={() => dispatch(deleteContact(contact.id))}
        type="button"
      >
        Видалити
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
