import React, { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
// import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  submitContactForm = (contact) => {
    const listContacts = this.state.contacts;
    listContacts.push(contact);
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.submitContactForm} />
        <h2>Contacts</h2>
        {/* <Filter /> */}
        <ContactList
          contacts={this.state.contacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
