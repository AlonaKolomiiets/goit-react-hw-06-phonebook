import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";


const initialState = {
  name: "",
  number: "",
};

const ContactForm = ({ addToPhonebook }) => {
  const [{ name, number }, setForm] = useState({
    ...initialState,
  });

  const inputHandler = ({ target }) => {
    const { value, name } = target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const contact = {
      name,
      number,
      id: uuidv4(),
    };

    addToPhonebook(contact);

    setForm(initialState);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label className={styles.contactFormLable}>
          <input
            onChange={inputHandler}
            type="text"
            name="name"
            placeholder="Enter name..."
            value={name}
          ></input>
        </label>
        <label className={styles.contactFormLable}>
          <input
            onChange={inputHandler}
            type="tel"
            name="number"
            placeholder="Enter number..."
            value={number}
          ></input>
        </label>

        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  addToPhonebook: PropTypes.func.isRequired,
};

export default ContactForm;
