import React from "react";
import { useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter/Filter";

const App = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);

  const filterContacts = () => {
    if (!filter.length) {
      return contacts;
    } else {
      return contacts.filter((elem) =>
        elem.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList filteredContacts={filterContacts()} />
    </div>
  );
};

export default App;

// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import ContactForm from "./components/ContactForm/ContactForm";
// import ContactList from "./components/ContactList";
// import Filter from "./components/Filter/Filter";
// import {
//   addContact,
//   deleteContact,
//   changeFilter,
//   initialContacts,
// } from "./redux/toolkit/actions/contacts";

// // const initialState = {
// //   contacts: [
// //     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
// //     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
// //     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
// //     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// //   ],
// //   filter: "",
// // };

// const App = () => {
//   // const [contacts, setContacts] = useState([...initialState.contacts]);
//   // const [filter, setFilter] = useState(initialState.filter);
//   const contacts = useSelector((state) => state.contacts.items);
//   const filter = useSelector((state) => state.contacts.filter);
//   const dispatch = useDispatch();

//   const inputHandler = ({ target }) => {
//     const { value } = target;
//     // setFilter(value);
//     dispatch(changeFilter(value));
//   };

//   useEffect(() => {
//     try {
//       const contactsLocalStorage = localStorage.getItem("contacts");
//       // setContacts(
//       //   contactsLocalStorage
//       //     ? JSON.parse(contactsLocalStorage)
//       //     : [...initialState.contacts]
//       // );
//       contactsLocalStorage &&
//         dispatch(initialContacts(JSON.parse(contactsLocalStorage)));
//     } catch {
//       console.log("Невалидный JSON");
//     }
//   }, []);

//   const filterContacts = () => {
//     if (!filter.length) {
//       return contacts;
//     } else {
//       return contacts.filter((elem) =>
//         elem.name.toLowerCase().includes(filter.toLowerCase())
//       );
//     }
//   };
//   const uniqueContact = (name) => {
//     return contacts.some(
//       (contact) => contact.name.toLowerCase() === name.toLowerCase()
//     );
//   };

//   const add = (contactObj) => {
//     uniqueContact(contactObj.name)
//       ? alert(`${contactObj.name} is already in contacts`)
//       : //   : setContacts((prev) => [...prev, contactObj]);
//         dispatch(addContact(contactObj));
//   };

//   const deleteContacts = (id) => {
//     // setContacts((prev) => prev.filter((contact) => contact.id !== id));
//     dispatch(deleteContact(id));
//   };

//   useEffect(() => {
//     localStorage.setItem("contacts", JSON.stringify(contacts));
//   }, [contacts]);

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm addToPhonebook={add} />

//       <h2>Contacts</h2>
//       <Filter filter={filter} inputHandler={inputHandler} />
//       <ContactList
//         filteredContacts={filterContacts()}
//         deleteContact={deleteContacts}
//       />
//     </div>
//   );
// };

// export default App;
