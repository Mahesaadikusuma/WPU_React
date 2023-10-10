import Logo from "./Logo";
import Search from "./search";

function Navbar() {
  return (
    <>
      <nav className="nav-bar">
        <Logo />

        <Search />
      </nav>
    </>
  );
}

export default Navbar;
