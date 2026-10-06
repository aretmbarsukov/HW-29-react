import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedNumber = number.trim();

    if (!trimmedName || !trimmedNumber) {
      setError("Заповни ім'я та номер телефону.");
      return;
    }

    const duplicate = contacts.some(
      contact =>
        contact.name.toLocaleLowerCase() === trimmedName.toLocaleLowerCase()
    );
    if (duplicate) {
      setError('Контакт із таким ім’ям уже є у книзі.');
      return;
    }

    dispatch(
      addContact({ id: nanoid(), name: trimmedName, number: trimmedNumber })
    );
    setName('');
    setNumber('');
    setError('');
  };

  const handleChange = setter => event => {
    setter(event.target.value);
    if (error) setError('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span className={styles.label}>Ім&apos;я</span>
        <input
          autoComplete="name"
          className={styles.input}
          name="name"
          onChange={handleChange(setName)}
          placeholder="Наприклад, Олена Коваль"
          required
          value={name}
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Номер телефону</span>
        <input
          autoComplete="tel"
          className={styles.input}
          name="number"
          onChange={handleChange(setNumber)}
          placeholder="+380 00 000 00 00"
          required
          type="tel"
          value={number}
        />
      </label>

      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}

      <button className={styles.button} type="submit">
        <span aria-hidden="true">+</span>
        Додати контакт
      </button>
    </form>
  );
};
