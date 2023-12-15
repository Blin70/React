import SearchBar from "./SearchBar";
import Hamburger from "./Hamburger";

function Navbar({onSubmit}){
    return (
        <div>
            <SearchBar onSubmit={onSubmit} />
            <Hamburger/>
        </div>
    );
}

export default Navbar;