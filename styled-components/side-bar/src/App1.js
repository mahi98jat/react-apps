import styled from "styled-components";
import Toolbar from "./components/Toolbar";
import DrawerItem from "./components/DrawerItem";
import SiteName from "./components/SiteName";
import DrawerItem1 from "./components/DrawerItem1";
export default function App1() {
  return (
    <div>
      <Toolbar>
        <SiteName>
           <DrawerItem1 label="SITENAME" /> 
        </SiteName>
        <DrawerItem label="About us" />
        <DrawerItem label="Prices" />
        <DrawerItem label="Other" />
      </Toolbar>
    </div>
  );
}
