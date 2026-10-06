export const selectVisibleContacts = state => {
  const normalizedFilter = state.filter.trim().toLocaleLowerCase();

  if (!normalizedFilter) return state.contacts;

  return state.contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter)
  );
};
