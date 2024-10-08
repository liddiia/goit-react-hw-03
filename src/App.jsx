import { useState } from 'react'
import { nanoid } from 'nanoid'

import ContactForm from './Components/ContactForm'
//import SearchBox from './Components/SearchBox'
import ContactList from './Components/ContactList'
import './App.css'


function App() {
const [contacts, setContacts] = useState([
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
])


const onAddContact =(formData)=> {
const finalContact = {
  ...formData,
  id: nanoid()
}
setContacts([...contacts, finalContact])

}


return (
     <div>
  <h1>Phonebook</h1>
 {/* <SearchBox/> */}
<ContactForm  onAddContact={onAddContact}/> 

{contacts.map((contact)=>{
  return(
<div>
<ContactList key={contact.id} name={contact.name} number={contact.number}/>
</div>
  )
  }
)
}
  </div>
  
  )}

export default App
