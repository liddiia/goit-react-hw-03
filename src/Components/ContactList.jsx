import ContactItem from "./ContactItem"

import css from './Contact.module.css'

const ContactList = ({key,name,number}) => {
  return (
    <div className={css.listBox}>
        <ul >
        <ContactItem
        key={key}
      name={name}
      number={number}/>
        </ul>
    </div>
  )
}

export default ContactList