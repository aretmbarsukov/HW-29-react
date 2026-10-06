import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contactsSlice';
import styles from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <label className={styles.filter}>
      <svg
        aria-hidden="true"
        className={styles.searchIcon}
        fill="none"
        height="15"
        viewBox="0 0 24 24"
        width="15"
      >
        <circle
          cx="10.8"
          cy="10.8"
          r="6.3"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="m15.5 15.5 4 4"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.7"
        />
      </svg>
      <input
        aria-label="Пошук контактів за ім'ям"
        className={styles.input}
        onChange={event => dispatch(changeFilter(event.target.value))}
        placeholder="Пошук контактів"
        type="search"
        value={filter}
      />
    </label>
  );
};
