import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './index.css';
import '@fontsource/play/400.css';
import '@fontsource/play/700.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
