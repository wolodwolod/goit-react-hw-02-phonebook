import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDelete}) => {
  return (
    <li className={s.ContactItem} key={id}>
      <p>
              {name}: {number}            
      </p>
      
          <button className={s.ContactItem__btn} type="button" onClick={() => onDelete(id)}>
        Delete
          </button>
          
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  
};
export default ContactItem;