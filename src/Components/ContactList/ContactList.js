import s from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
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
}
