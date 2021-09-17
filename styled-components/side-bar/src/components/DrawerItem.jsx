export default function DrawerItem({ label }) {
  return (
    <button
      style={{
        height: "50px",
        width: "100px",
        background: "transparent",
        border: "none",
        color: "white",
        fontSize: "22px",
      }}
    >
      {label}
    </button>
  );
}
