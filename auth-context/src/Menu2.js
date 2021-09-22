import Contact from "./menu-components/Contectus";
import Download from "./menu-components/Download";
import Help from "./menu-components/Help";
import Home from "./menu-components/Home";
import Join from "./menu-components/Joinus";
import Login from "./menu-components/Login";
import Search from "./menu-components/Search";
import Settings from "./menu-components/Settings";

export default function Menu2() {
  return (
    <div className="grid">
      <Join />
      <Settings />
      <Login />
      <Contact />
      <Search />

      <Help />

      <Home />

      <Download />
    </div>
  );
}
