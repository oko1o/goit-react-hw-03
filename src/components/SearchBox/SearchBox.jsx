import css from './SearchBox.module.css';

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.searchBox}>
      <label htmlFor="searchContacts">Find contacts by name</label>
      <input
        type="text"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
        id="searchContacts"
      />
    </div>
  );
}
