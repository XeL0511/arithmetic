import React, { FC } from "react";

type Props = {
    name :string,
    icon : string,
    element :string,
    rarity :string
}

const Display_icon :FC<Props> = ({name, icon, element, rarity}) => (
    <div className="icon_button">
        <img className="rarity_background" src={rarity}/>
        <img className="character_icon" src={icon}/>
        <img className="element_icon" src={element}/>
    </div>
);

export default Display_icon;