import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/toolkit/actions/contacts";
import styles from "./ContactListItem.module.css";
import PropTypes from "prop-types";

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const deleteContacts = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <li key={id}>
        {name}:{number}
        <button
          className={styles.contactListItemBtn}
          onClick={() => deleteContacts(id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;

// import React from "react";
// import styles from "./ContactListItem.module.css";
// import PropTypes from "prop-types";

// const ContactListItem = ({ id, name, number, deleteContact }) => {
//   return (
//     <>
//       <li key={id}>
//         {name}:{number}
//         <button
//           className={styles.contactListItemBtn}
//           onClick={() => deleteContact(id)}
//         >
//           Delete
//         </button>
//       </li>
//     </>
//   );
// };

// ContactListItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };

// export default ContactListItem;
