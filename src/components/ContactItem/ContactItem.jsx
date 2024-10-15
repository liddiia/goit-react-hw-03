import css from "./ComtactItem.module.css";

const ContactItem = ({ name, number, id}, DelContact ) => {
  return (
    <div className={css.contactItem}>
     
      <div className={css.contactItemData}>
        <p className={css.contactN}>
          {/* {id} */}
          <span className={css.contactItemTitel}>&#128100; Name: </span> {name}
        </p>
        <p className={css.contactN}>
    
          <span className={css.contactItemTitel}>&#128222; Number: </span>
          {number}
        </p>
      </div>
      <button type="button" onClick={()=>{DelContact(id)}} className={css.contactDelButton}>
        Delete
      </button>
    </div>
  );
};

export default ContactItem;
