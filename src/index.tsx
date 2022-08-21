import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { GlobalStyle } from './indexStyle'; 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
        <BrowserRouter>
          <App />
        </BrowserRouter>      
    </RecoilRoot>
  </React.StrictMode>
);

reportWebVitals();