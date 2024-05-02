import React, { useState } from 'react';
import '@styles/Character-list-container.css';
import Display_icon from '@scripts/commons/Display-icon';
import Character_data from './commons/character-list.json';

const Character_list_container = () => {
    return (
        <div className="Character_list_container">
            <Display_list />
        </div>
    );
}

const Display_list = () => {
    const [data, set_data] = useState(Character_data);
    return (
        <div>
            {data.map((val :any) => 
                <Display_icon key={val.name} name={val.name} icon={`${process.env.PUBLIC_URL}/assets/data/${val.icon}`} element={`${process.env.PUBLIC_URL}/assets/${val.element_image}`} rarity={`${process.env.PUBLIC_URL}/assets/${val.rarity_background}`}/>
            )}
        </div>
    );
}

export default Character_list_container;
