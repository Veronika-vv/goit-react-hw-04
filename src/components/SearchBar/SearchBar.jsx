import css from "./SearchBar.module.css";

export default function SearchBar({ handleSearch }) {
  const onSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value.trim();
    handleSearch(query);
    e.target.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={onSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          name="search"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
