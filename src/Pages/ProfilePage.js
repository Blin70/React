import { useState } from "react";

function ProfilePage() {
    const [user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        password:""
    });

    const handleChange = (event) => {
        setUser(prev => ({...prev, [event.target.name]:event.target.value}))
    };
    return(
        <div>
            <input onChange={handleChange} placeholder="Name" type="text" name="name" autoComplete="off"/>
            <input onChange={handleChange} placeholder="Username" type="text" name="username" autoComplete="off"/>
            <input onChange={handleChange} placeholder="Email" type="text" name="email" autoComplete="off"/>
            <input onChange={handleChange} placeholder="Password" type="text" name="password" autoComplete="off"/>
            <br/>
            {`{name:${user.name} , username:${user.username} , email:${user.email} , password:${user.password}}`}
        </div>
    );
};

export default ProfilePage;