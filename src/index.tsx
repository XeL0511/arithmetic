import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Character_list_container from './scripts/Character-list-container';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Character_list_container />
    </React.StrictMode>
);
