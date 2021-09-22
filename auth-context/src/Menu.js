import AllComp from "./menu-components/all";

export default function Menu() {
  const data = [
    { name: "JOIN US", backColor: "blue" },
    { name: "SETTINGS", backColor: "skyBlue" },
    { name: "LOGIN", backColor: "yello" },
    { name: "CONTACT US", backColor: "red" },
    { name: "SEARCH", backColor: "green" },
    { name: "HELP", backColor: "purple" },
    { name: "HOME", backColor: "pink" },
    { name: "DOWNLOAD", backColor: "gold" },
  ];
  return (
    <div className="grid">
      {data.map((el) => (
        <AllComp name={el.name} backColor={el.backColor} />
      ))}
    </div>
  );
}
