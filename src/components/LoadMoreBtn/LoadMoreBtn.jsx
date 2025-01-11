import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onLoadMore }) {
  return (
    <button className={css.button} onClick={() => onLoadMore()} type="button">
      Load more
    </button>
  );
}
