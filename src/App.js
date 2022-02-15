
import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import Section from 'components/Section'
import PhoneBook from 'components/PhoneBook'
import ContactList from 'components/ContactList'

class App extends Component {

    state = {
        contacts: [
      { name: 'Rosie Simpson', number: '459-12-56' ,id: nanoid() },
      { name: 'Hermione Kline', number: '433-89-12' ,id: nanoid() },
      { name: 'Eden Clements', number: '645-17-79' ,id: nanoid() },
      { name: 'Annie Copeland', number: '227-91-26' ,id: nanoid() },
        ],
        name: '',
        number: '',
    }

 addContact = ({ name, number }) => {
    const normalizedInputName = name.toLowerCase();
    const findName = this.state.contacts.find(
      
        contact => contact.name.toLowerCase() === normalizedInputName
    );
    if (findName) {
      return alert(`${name} is already in contacts.`);
    }
const findNumber = this.state.contacts.find(
      contact => contact.number === number
    );
    if (findNumber) {
      return alert(`This phone number is already in contacts.`);
    }
    
    this.setState(({ contacts }) => ({
      contacts: [{ name, number, id: nanoid() }, ...contacts],
    }));
  };


    render() {
        console.log(this.state);
        return (
            <>
                <Section className='PhonebookSection' title='Phonebook'>
                    <PhoneBook onSubmit={this.addContact} 
                    />                   
                </Section>
                <Section className='ContactsSection' title='Contacts'>
                    <ContactList
                    contacts={this.state.contacts}
                    />                   
                </Section>
                
                </>
            )
        
    }
}
export default App;