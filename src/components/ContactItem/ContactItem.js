import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number}) => {
  return (
    <li className={s.ContactItem} key={id}>
      <p>
              {name}: {number}
              
      </p>
      
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  
};
export default ContactItem;