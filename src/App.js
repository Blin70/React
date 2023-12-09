import Navbar from "./Components/Navbar";
import Route from "./Components/Route";
import ProfilePage from './Pages/ProfilePage';
import AboutPage from './Pages/AboutPage';
import HelpPage from './Pages/HelpPage';

function App(){
    return (
         <div>
            <Navbar />
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
         </div>
    );
};

export default App;