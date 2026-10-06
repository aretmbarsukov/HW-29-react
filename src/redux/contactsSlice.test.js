import {
  addContact,
  changeFilter,
  contactsReducer,
  deleteContact,
} from './contactsSlice';
import { selectVisibleContacts } from './selectors';

const firstContact = {
  id: 'one',
  name: 'Олена Коваль',
  number: '+380 11 111 11 11',
};
const secondContact = {
  id: 'two',
  name: 'Іван Петренко',
  number: '+380 22 222 22 22',
};

describe('contacts reducer', () => {
  it('adds and removes contacts', () => {
    const withContacts = contactsReducer(undefined, addContact(firstContact));
    expect(withContacts.contacts).toEqual([firstContact]);

    const afterDelete = contactsReducer(
      { ...withContacts, contacts: [firstContact, secondContact] },
      deleteContact(firstContact.id)
    );
    expect(afterDelete.contacts).toEqual([secondContact]);
  });

  it('updates filter and derives matching contacts', () => {
    const state = contactsReducer(
      { contacts: [firstContact, secondContact], filter: '' },
      changeFilter('коваль')
    );

    expect(state.filter).toBe('коваль');
    expect(selectVisibleContacts(state)).toEqual([firstContact]);
    expect(state.contacts).toEqual([firstContact, secondContact]);
  });
});
