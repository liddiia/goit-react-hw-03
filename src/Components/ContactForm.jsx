import css from "./ContactForm.module.css";

const ContactForm = ({onAddContact}) => {

  const handleSubmit=(ev)=> {
    ev.preventDefaault();
  
    const form = ev.currentTarget;
    console.log('form:', form);
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const formData = {
      name,
      number,  };
     
      onAddContact(formData);
  }
  //form.reset();
  return (
    <form onSubmit={handleSubmit} className={css.contactForm} >
     
        <label className={css.formLabel}>
          <span className={css.formLabelTitle}>Name: </span>
          <input
            className={css.formInput}
            type="text"
            name="name"
            placeholder="Tom Smith"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </label>
        <label className={css.formLabel}>
          <span className={css.formLabelTitle}>Number: </span>
          <input
            type="text"
            className={css.formInput}
            name="number"
            placeholder="+380XX-XXX-XX-XX"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            required
          />
        </label>
    
      <button  type="submit" className={css.addContactBtn}>
     Add contact
      </button>
    </form>
  );
};

export default ContactForm;
