import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { format } from "date-fns";

export default function ImageModal({ openCloseModal, modalImg }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      padding: "0",
      border: "none",
      background: "transparent",
    },
  };

  Modal.setAppElement("#root");

  return (
    <Modal
      isOpen={true}
      overlayClassName={css.overlay}
      style={customStyles}
      onRequestClose={() => openCloseModal()}
    >
      <img src={modalImg.urls.regular} alt={modalImg.alt_description} />
      <div className={css.wrap}>
        <p>Likes: {modalImg.likes}</p>
        <p>{format(new Date(modalImg.created_at), "Pp")}</p>
        <p>{modalImg.description && modalImg.description}</p>
      </div>
      <button
        onClick={() => openCloseModal()}
        className={css.closeBtn}
        type="button"
      >
        <IoIosCloseCircleOutline size={40} />
      </button>
    </Modal>
  );
}
