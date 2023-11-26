import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { BsList } from "react-icons/bs";

function SearchBar(){
    const [term, setTerm] = useState("");

    const handleClick = () => {
        console.log("Hamburger clicked")
        
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleChange = (event) => {
        setTerm(event.target.value)
    };

    return(
        <div className='search-bar border-[0] border-b border-solid border-b-gray-300 p-2.5 flex justify-center'>
            <form className="flex" onSubmit={handleSubmit}>
                <input value={term} type="text" onChange={handleChange} className="w-80 h-10 rounded-tl-3xl rounded-bl-3xl border-r-0 border-black text-xl pl-1.5 outline-0"></input>
                <button className="w-32 rounded-tr-3xl rounded-br-3xl border-l-0 cursor-pointer"><GoSearch /></button>
            </form>
            <button onClick={handleClick} className="bg-white border-0 text-4xl cursor-pointer right-4 absolute"><BsList /></button>
        </div>
    );
}

export default SearchBar;