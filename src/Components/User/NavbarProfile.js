import { useAuth0 } from "@auth0/auth0-react";
import Default from "../../images/default_profile_pic.png"

function Navbar_Profile() {
    const { user, isAuthenticated } = useAuth0();

    const handleClick = () => {
        window.location.pathname = "/Profile"
    };

    return(
            <img onClick={handleClick} src={isAuthenticated ? user.picture : Default} alt="profile" className="absolute cursor-pointer left-6 top-1.5 rounded-full h-16 w-16"/>
        )
};  

export default Navbar_Profile;