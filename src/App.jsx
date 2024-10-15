import { useEffect, useState } from 'react';

import ContactForm from "./components/ContactForm/ContactForm"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactList from "./components/ContactList/ContactList"
import { nanoid } from 'nanoid';



const ContactData = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

const App = () => {
  const [contacts, setContacts]= useState(ContactData);

    // ()=>{JSON.parse(localStorage.getItem('contactsItem')) ?? ContactData });
 
    // useEffect(() => {
    //   const stringifiteContactsItem = JSON.stringify(contacts);
    //   localStorage.setItem('contactsItem', stringifiteContactsItem);
    // }, [contacts]);
    // 
    const [filter, setFilter] = useState('');

  const onAddContact =(formData) =>{
    const newContact = {
      ...formData,
      id: nanoid(),
    };
    setContacts((prevState) => [...prevState, newContact]);
  };

  const DelContact = (contactId) => {
    setContacts(contacts.filter((contact) => contactId !== contact.id))
    }

    // onClick={() => {
    //   setArtists(
    //     artists.filter(a =>
    //       a.id !== artist.id
    //     )
    //   );
    // }}
    // const filteredUsers = contacts.filter(
    //   (contact) =>
    //     contact.name.toLowerCase().includes(filter.toLowerCase().trim())      );
  

  return (
    <div>
       <h1 style={{textAlign:"center"}}>Phonebook</h1>
     <ContactForm onAddContact={onAddContact} />
     
     <SearchBox 
     value={filter} 
     onFilter={setFilter}/>  
      
      <ContactList contacts={contacts}
      DelContact={DelContact}/>
    </div>
  )
}

export default App