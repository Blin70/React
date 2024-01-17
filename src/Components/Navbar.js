import SearchBar from "./SearchBar";
import Hamburger from "./Hamburger";
import NavbarProfile from "./User/NavbarProfile";

function Navbar({onSubmit}){
    return (
        <div>
            <NavbarProfile/>
            <SearchBar onSubmit={onSubmit} />
            <Hamburger/>
        </div>
    );
}

export default Navbar;