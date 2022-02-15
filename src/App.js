
import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import Section from 'components/Section'
import PhoneBook from 'components/PhoneBook'
import ContactList from 'components/ContactList'

class App extends Component {

    state = {
        contacts: [{ id: nanoid(), name: 'Rosie Simpson'},
      { id: nanoid(), name: 'Hermione Kline' },
      { id: nanoid(), name: 'Eden Clements' },
      { id: nanoid(), name: 'Annie Copeland' },],
        name: ''
    }

 addContact = ({ name }) => {
    const normalizedFind = name.toLowerCase();
    const findName = this.state.contacts.find(
      
        contact => contact.name.toLowerCase() === normalizedFind
    );
    if (findName) {
      return alert(`${name} is already in contacts.`);
    }

    
    this.setState(({ contacts }) => ({
      contacts: [{ name, id: nanoid() }, ...contacts],
    }));
  };


    render() {
        const contacts = this.state.contacts;

        return (
            <>
                <Section className='PhonebookSection' title='Phonebook'>
                    <PhoneBook onSubmit={this.addContact} 
                    />                   
                </Section>
                <Section className='ContactsSection' title='Phonebook'>
                    <ContactList
                    contacts={contacts}
                    />                   
                </Section>
                
                </>
            )
        
    }
}
export default App;