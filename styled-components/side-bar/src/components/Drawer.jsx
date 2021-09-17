export default function ({ children }) {
  return (
    <div
      style={{
        height: "400px",
        width: "300px",
        border: "1px solid black",
        overflow: "srcoll",
        margin: "auto",
        overflow: "scroll",
        color: "gray",
      }}
    >
      {children}
    </div>
  );
}
