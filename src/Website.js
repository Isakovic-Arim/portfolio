import Header from "./components/Header/index";
import NavBar from "./components/NavBar";
import NavItem from "./components/NavItem";

function Website() {
  return (
    <>
      <NavBar>
        <NavItem heading='About' />
        <NavItem heading='Skills' />
      </NavBar>
      <Header />
    </>
  );
}

export default Website;