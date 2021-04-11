import { connect } from 'react-redux';
import * as itemsActions from '../../redux/contacts/items-actions';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={s.item}>
        <p className={s.text}>{name}</p>
        <p className={s.number}>{number}</p>
        <button onClick={() => onDeleteContact(id)} className={s.btn}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

const getVisibleContacts = (allContacts, filter) => {
  const normalizedPhone = filter.toLowerCase();

  return allContacts.filter(phone =>
    phone.name.toLowerCase().includes(normalizedPhone),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(itemsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
