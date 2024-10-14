import ContactItem from "../ContactItem/ContactItem"
import css from "./ContactList.module.css"
const ContactList = ({contacts,DelContact}) => {
  return (
    <div>
      <h2>ContactList</h2>
     <ul className={css.listBox}>
      {contacts.map((contact)=> (
        <li key ={contact.id}>
      <ContactItem name = {contact.name}
                   number = {contact.number}
                   id={contact.id}
                   DelContact={DelContact}
                  />
                   </li>)
 )}  </ul> 
 </div>
  )
}

export default ContactList
