import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Components/User/Login";
import LogoutButton from "../Components/User/Logout";

function ProfilePage() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if(isLoading){
        return <div>Loading...</div>;
    }
    
    return(
        isAuthenticated ? (
            <div className="text-center w-full">
                <img src={user.picture} alt={user.name}></img>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <LogoutButton/>
            </div>
        )  : <LoginButton/> 
    );  
};

export default ProfilePage;