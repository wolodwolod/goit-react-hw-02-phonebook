import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import ContactItem from 'components/ContactItem';


const ContactList = ({ contacts, onDelete }) => {
  
contacts.defaultProps = {
      id: nanoid(),
      name: "Name is unknown",
      number: "Tel. number is unknown"
};  

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
              name={name}
              number={number}
              onDelete={onDelete}
                
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
      number: PropTypes.string.isRequired,
          })
    ),
    onDelete: PropTypes.func.isRequired,
  };

export default ContactList;
