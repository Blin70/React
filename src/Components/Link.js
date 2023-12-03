import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";

function Link({ to, children }) {
   const { navigate } = useNavigation();

   //const classes = classNames();

    const handleClick = (event) => {
        if(event.metaKey || event.ctrlKey){
            return;
        }
        event.preventDefault()

        navigate(to);
    };

    return <a className="w-full h-20 text-4xl list-none text-center cursor-pointer leading-loose rounded-2xl hover:bg-stone-300 list-item p-0 m-0 no-underline text-inherit" href={to} onClick={handleClick}>{children}</a>
};

export default Link;