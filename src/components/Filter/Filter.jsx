import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contactsSlice';
import styles from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <label className={styles.filter}>
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
