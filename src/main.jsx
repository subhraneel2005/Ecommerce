import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-b6qinorl40ernzq2.us.auth0.com"
    clientId="u19C5vqprGRBTg9aTsRfkwsgH8TS14bE"
    authorizationParams={{
    redirect_uri: window.location.origin
    }}
  >
    <App/>
  </Auth0Provider>,
)
