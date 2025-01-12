import { useEffect, useState } from "react";
import fetchImages from "../../unsplash-api";
import SearchBar from "../SearchBar/SearchBar";
import "./App.css";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [modalImg, setModalImg] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query) return;
    setLoader(true);
    setError("");
    fetchImages(query, page)
      .then(({ data }) => {
        if (!data.results.length) {
          setError(`Nothing was found for the word "${query}"`);
          return;
        }
        setImages((prevImages) => [...prevImages, ...data.results]);
        setTotalPages(data.total_pages);
      })
      .catch(() => {
        setError("Oops, something went wrong. Please try reloading the page.");
      })
      .finally(() => setLoader(false));
  }, [query, page]);

  const onSearch = (query) => {
    if (!query.trim()) {
      toast.error("Enter the word");
      return;
    }
    setQuery(query);
    setImages([]);
    setTotalPages(0);
    setPage(1);
    setError("");
  };

  const openCloseModal = () => {
    setOpenModal(!openModal);
    if (openModal) document.body.style.overflow = "auto";
    else document.body.style.overflow = "hidden";
  };

  const handleOpenModel = (currentId) => {
    const [currentImg] = images.filter(({ id }) => id === currentId);
    setModalImg(currentImg);
    openCloseModal();
  };

  const onLoadMore = () => setPage((prevPage) => prevPage + 1);
  const visibleBtnMore = () => images.length !== 0 && page < totalPages;

  return (
    <>
      <SearchBar handleSearch={onSearch} />
      <Toaster position="top-right" />
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery images={images} handleOpenModel={handleOpenModel} />
          {loader && <Loader />}
          {visibleBtnMore() && <LoadMoreBtn onLoadMore={onLoadMore} />}
          {openModal && (
            <ImageModal openCloseModal={openCloseModal} modalImg={modalImg} />
          )}
        </>
      )}
    </>
  );
}

export default App;
