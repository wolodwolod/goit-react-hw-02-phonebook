import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem';
import s from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <ul className={s.ContactList}>
      {contacts.map(({ id, name }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
                
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
          })
  )
  
};
export default ContactList;
