import React, { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter/Filter";





//   componentDidMount() {
//     try {
//       const contactsFromStorage = JSON.parse(localStorage.getItem("contacts"));
//       contactsFromStorage && this.setState({ contacts: contactsFromStorage });
//     } catch {
//       console.log("Невалидный JSON");
//     }
//   }

//   inputHandler = ({ target }) => {
//     const { value, name } = target;

//     this.setState({ [name]: value });
//   };



//   filterContacts = () => {
//     const { contacts, filter } = this.state;
//     const insensitiveValue = filter.toLowerCase();
//     if (filter.length) {
//       return contacts.filter((contact) =>
//         contact.name.toLowerCase().includes(insensitiveValue)
//       );
//     } else {
//       return contacts;
//     }
//   };
//   deleteContact = (id) => {
//     const { contacts } = this.state;
//     this.setState({
//       contacts: contacts.filter((contact) => contact.id !== id),
//     });
//   };
//   render() {
//     const { filter } = this.state;
//     const filteredContacts = this.filterContacts();
//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm addToPhonebook={this.addToPhonebook} />
//         <h2>Contacts</h2>
//         <Filter filter={filter} inputHandler={this.inputHandler} />
//         <ContactList
//           filteredContacts={filteredContacts}
//           deleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }

// export default App;

const initialState = {
  contacts: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
};

const App = () => {
  const contactsLocalStorage = localStorage.getItem("contacts");
  const [contacts, setContacts] = useState(
    contactsLocalStorage
      ? JSON.parse(contactsLocalStorage)
      : [...initialState.contacts]
  );



//   componentDidMount() {
//     try {
//       const contactsFromStorage = JSON.parse(localStorage.getItem("contacts"));
//       contactsFromStorage && this.setState({ contacts: contactsFromStorage });
//     } catch {
//       console.log("Невалидный JSON");
//     }
//   }

//   inputHandler = ({ target }) => {
//     const { value, name } = target;

//     this.setState({ [name]: value });
//   };

  const [filter, setFilter] = useState(initialState.filter);

  const filterContacts = () => {
    if (!filter.length) {
      return contacts;
    } else {
      return contacts.filter((elem) =>
        elem.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };
  const uniqueContact = (name) => {
    return contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const addContact = (contactObj) => {
    uniqueContact(contactObj.name)
      ? alert(`${contactObj.name} is already in contacts`)
      : setContacts((prev) => [...prev, contactObj]);
  };


  const deleteContacts = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };



  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);



  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList
        filteredContacts={filterContacts()}
        deleteContact={deleteContacts}
      />
    </div>
  );
};

export default App;
