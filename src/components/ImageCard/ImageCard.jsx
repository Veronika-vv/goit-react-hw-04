export default function ImageCard({
  data: { urls, alt_description },
  onClick,
}) {
  const handleClick = () => {
    onClick(urls.full);
  };

  return (
    <div>
      <img
        src={urls.small}
        alt={alt_description || "Image"}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}
