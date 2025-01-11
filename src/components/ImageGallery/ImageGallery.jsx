import css from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, handleOpenModel }) {
  return (
    <ul className={css.list}>
      {images.map((data) => (
        <li onClick={() => handleOpenModel(data.id)} key={data.id}>
          <ImageCard data={data} />
        </li>
      ))}
    </ul>
  );
}
