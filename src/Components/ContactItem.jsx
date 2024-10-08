import css from './Contact.module.css'

const ContactItem = ({name,number}) => {
  return (
          <li className={css.contactItem}>
            <div className={css.contactItemData}>
          &#128100; Name: {name}           
          &#128222; Number:{number}  
          </div>         
          <button className={css.contactDelButton}>Delete</button>
    </li> )
  
}

export default ContactItem
