import { BsList } from "react-icons/bs";

function Hamburger(){

    const handleClick = () => {
        console.log("Hamburger clicked")
        
    };
    
    return(
        <button onClick={handleClick} className="bg-white border-0 text-4xl cursor-pointer right-4 absolute"><BsList /></button>
    );
};

export default Hamburger;