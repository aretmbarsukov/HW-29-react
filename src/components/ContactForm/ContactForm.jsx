import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name').trim();
    const number = formData.get('number').trim();
    const nameExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (nameExists) {
      window.alert(`${name} вже є у контактах.`);
    } else {
      dispatch(addContact({ id: nanoid(), name, number }));
      form.reset();
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.field}>
        Ім&apos;я
        <input autoComplete="name" name="name" required />
      </label>
      <label className={styles.field}>
        Номер телефону
        <input autoComplete="tel" name="number" required type="tel" />
      </label>
      <button type="submit">Додати контакт</button>
    </form>
  );
};
