import css from "./ComtactItem.module.css";

const ContactItem = ({ name, number}) => {
  return (
    <div className={css.contactItem}>
     
      <div className={css.contactItemData}>
        <p>
          
          <span className={css.contactItemTitel}>&#128100; Name:</span> {name}
        </p>
        <p>
    
          <span className={css.contactItemTitel}>&#128222; Number:</span>
          {number}
        </p>
      </div>
      <button type="button"  className={css.contactDelButton}>
        Delete
      </button>
    </div>
  );
};

export default ContactItem;
