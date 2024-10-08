import ContactItem from "./ContactItem"


const ContactList = ({key,name,number}) => {
  return (
    <div>
        <ul>
        <ContactItem
        key={key}
      name={name}
      number={number}/>
        </ul>
    </div>
  )
}

export default ContactList