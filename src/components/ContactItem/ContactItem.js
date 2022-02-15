import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ id, name}) => {
  return (
    <li className={s.ContactItem} key={id}>
      <p>
              {name}
              
      </p>
      
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  
};
export default ContactItem;