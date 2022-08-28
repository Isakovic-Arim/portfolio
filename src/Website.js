import Header from "./components/Header";
import NavBar from "./components/NavBar";
import NavItem from "./components/NavItem";
import SectionAbout from "./components/SectionAbout";
import SectionSkills from "./components/SectionSkills";
import SectionWork from "./components/SectionWork";

function Website() {
  return (
    <>
      <NavBar>
        <NavItem heading='About' link='#about' />
        <NavItem heading='Skills' link='#skills' />
        <NavItem heading='Work' link='#work' />
      </NavBar>
      <Header />
      <SectionAbout />
      {/* <SectionSkills /> */}
      <SectionWork />
    </>
  );
}

export default Website;