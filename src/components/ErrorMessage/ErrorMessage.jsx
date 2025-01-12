export default function ErrorMessage({ message }) {
  return (
    <div style={{ textAlign: "center", color: "red", marginTop: "20px" }}>
      <p>{message}</p>
    </div>
  );
}
