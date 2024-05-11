import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Character_list_container from './scripts/Character-list-container';
import Credit from './scripts/Credit';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Character_list_container />
        <Credit />
    </React.StrictMode>
);
