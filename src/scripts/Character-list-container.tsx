import React, { useEffect, useState } from 'react';
import { FC } from "react";
import '../styles/Character-list-container.css';
import Display_icon from './commons/Display-icon';
import Imported_data from './commons/character-list.json';
import Condition_button from './commons/Condition-button';
import Drop_down_menu from './commons/Drop-down-menu';

const Character_list_container = () => {
    interface data_type {
        [key :string] :string;
    }
    const initial_data :data_type[] = Imported_data;
    const [selected, set_selected] = useState<{[key :string] :string[]}>({
        "rarity" : [],
        "element" : [],
        "weapon" : []
    });
    const [character_data, set_character_data] = useState(initial_data);
    
    const filer_list = () => {
        let copy :data_type[] = initial_data.slice();
        for(const [key, value] of Object.entries(selected)) {
            if(value.length != 0){
                copy = copy.filter(obj => {
                    let flag = false;
                    for(let i = 0; i < value.length; ++i){
                        if((obj[key] === value[i]) ? true : false){
                            flag = true;
                        }
                    }
                    return flag;
                });
            }
        }
        set_character_data(copy);
    }

    const manage_selected = (input_value :string, input_id :string) => {
        let copy = {...selected};
        let found_flag = false;
        for(const [key, value] of Object.entries(copy)) {
            for(let i = 0; i < value.length; ++i){
                if(value[i] === input_value) {
                    copy[key].splice(i, 1);
                    found_flag = true;
                }
            }
        }
        if(found_flag == false) {
            copy[input_id].push(input_value);
        }
        set_selected(copy);
    }

    useEffect(() => {
        filer_list();
    }, [selected]);
    
    const rarity = [{name : "☆４", id : "rarity", value : "4"}, 
                    {name : "☆５", id : "rarity", value : "5"}];

    const element = [{name : "炎", id : "element", value : "pyro"}, 
                     {name : "水", id : "element", value : "hydro"},
                     {name : "雷", id : "element", value : "electro"},
                     {name : "氷", id : "element", value : "cryo"},
                     {name : "風", id : "element", value : "anemo"},
                     {name : "岩", id : "element", value : "geo"},
                     {name : "草", id : "element", value : "dendro"}];

    const weapon = [{name : "片手剣", id : "weapon", value : "sword"}, 
                     {name : "弓", id : "weapon", value : "bow"},
                     {name : "長柄武器", id : "weapon", value : "polearm"},
                     {name : "両手剣", id : "weapon", value : "claymore"},
                     {name : "法器", id : "weapon", value : "catalyst"}];

    return (
        <div className="Character_list_container">
            <div className="Condition_container">
                <a className="Condition_title">レアリティ</a>
                <div className="Button_container">
                    {rarity.map((obj :any) => 
                        <Condition_button
                            key={obj.value}
                            name={obj.name}
                            value={obj.value}
                            id={obj.id}
                            func={manage_selected}
                        />
                    )}  
                </div>

                <a className="Condition_title">元素タイプ</a>
                <div className="Button_container">
                    {element.map((obj :any) => 
                        <Condition_button
                            key={obj.value}
                            name={obj.name}
                            value={obj.value}
                            id={obj.id}
                            func={manage_selected}
                        />
                    )}
                </div>

                <a className="Condition_title">武器種</a>
                <div className="Button_container">
                    {weapon.map((obj :any) => 
                        <Condition_button
                            key={obj.value}
                            name={obj.name}
                            value={obj.value}
                            id={obj.id}
                            func={manage_selected}
                        />
                    )}
                </div>
            </div>
            <Display_list character_data={character_data}/>
        </div>
    );
}

type Props_Display_list = {
    character_data :{
        [key :string] :string
    }[]
}

const Display_list :FC<Props_Display_list> = ({character_data}) => {
    const [data, set_data] = useState(character_data);

    useEffect(() => {
        set_data(character_data);
    }, [character_data]);
    
    return (
        <div className="Character_list">
            {data.map((val :any) => 
                <Display_icon
                    key={val.name}
                    name={val.name}
                    icon={`${process.env.PUBLIC_URL}/assets/data/${val.icon}`}
                    element={`${process.env.PUBLIC_URL}/assets/${val.element_image}`}
                    rarity={`${process.env.PUBLIC_URL}/assets/${val.rarity_background}`}
                />
            )}
        </div>
    );
}

export default Character_list_container;
