import css from "./SearchBox.module.css"

const SearchBox = () => {
  return (
<form className={css.SearchBox}>
        <label className={css.filter}>
     <span className={css.filterText}>Find contacts by name:  </span>
       <input className={css.filterInput} 
       name="name"
       type="text"
        placeholder="Search" 
 
       />
  </label>
</form>
  )
}

export default SearchBox

