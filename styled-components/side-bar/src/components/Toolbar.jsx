

export default function Toolbar({ children }) {
  return (
    <div
      style={{
        height: "70px",
        width: "900px",
        backgroundColor: "blue",
        display: "flex",
        justifyContent: "space-between",
        borderTop:"3px solid black",
        borderLeft: "3px solid black",
        borderRight: "5px solid black",
        margin: "auto",
        color: "white",
        fontSize: "22px",
      }}
    >
      {children}
    </div>
  );
}
