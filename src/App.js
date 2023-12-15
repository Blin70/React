import { useState } from "react";
import Navbar from "./Components/Navbar";
import Route from "./Components/Route";
import ProfilePage from './Pages/ProfilePage';
import AboutPage from './Pages/AboutPage';
import HelpPage from './Pages/HelpPage';
import searchImages from "./api";
import ImageList from "./Components/ImageList";
import useNavigation from "./hooks/use-navigation";

function App(){
    const [images, setImages] = useState([]);
    const { currentPath } = useNavigation();

    const handleSubmit = async (term) => {
        const result = await searchImages(term);
        setImages(result);
    };

    return (
         <div>
            <Navbar onSubmit={handleSubmit}/>
            <div>
                <Route path="/Profile">
                    <ProfilePage/>
                </Route>
                <Route path="/About">
                    <AboutPage/>
                </Route>
                <Route path="/Help">
                    <HelpPage/>
                </Route>
            </div>
            { (currentPath === "/" || currentPath ==="/Home") && <ImageList images={images} />  }
         </div>
    );
};

export default App;