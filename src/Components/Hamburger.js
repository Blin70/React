import { BsList } from "react-icons/bs";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";

function Hamburger(){
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu)
    };
    
    return(
        <div>
        <button onClick={handleClick} className="absolute bg-white border-0 text-4xl cursor-pointer right-6 top-5"><BsList /></button>
        {showMenu && <HamburgerMenu />}
        </div>
    );
};

export default Hamburger;