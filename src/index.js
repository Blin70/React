import './index.css';
import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";
import { NavigationProvider } from './context/navigation';
import { Auth0Provider } from '@auth0/auth0-react';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <Auth0Provider  
    domain="dev-if4uklkweeknsn5d.us.auth0.com" 
    clientId="U2qxQnwAT167LYcF8aUvxpjVpt0rvnDw" 
    authorizationParams={{redirect_uri: window.location.origin}}>
        <NavigationProvider>
            <App />
        </NavigationProvider>
    </Auth0Provider>
);