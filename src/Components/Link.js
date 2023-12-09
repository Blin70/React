import useNavigation from "../hooks/use-navigation";
import className from "classnames";

function Link({ to, children, classNames }) {
   const { navigate } = useNavigation();

    const classes = className(classNames);

    const handleClick = (event) => {
        if(event.metaKey || event.ctrlKey){
            return;
        }
        event.preventDefault()

        navigate(to);
    };

    return <a className={classes} href={to} onClick={handleClick}>{children}</a>
};

export default Link;