import './index.css';
import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./App";
import { NavigationProvider } from './context/navigation';
import { Auth0Provider } from '@auth0/auth0-react';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

root.render(
    <Auth0Provider  
    domain={domain} 
    clientId={clientId}
    authorizationParams={{redirect_uri: window.location.origin}}>
        <NavigationProvider>
            <App />
        </NavigationProvider>
    </Auth0Provider>
);