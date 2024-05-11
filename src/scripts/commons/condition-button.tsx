import { useState } from "react";
import "../../styles/Condition-button.css"

type Props = {
    name :string,
    value :string,
    id :string,
    func :(input_value :string, input_id :string) => void
}

const Condition_button = ({name, value, id, func} :Props) => {
    const [active, set_active] = useState(false);

    const toggle_class = () => {
        set_active(!active);
    }
    const manage_selected = (value :string, id :string) => {
        func(value, id);
    }

    return (
        <div className={"Condition_button"+" "+`${active ? "active" : ""}`}
            onClick={() => {
                toggle_class();
                manage_selected(value, id);
            }}>
            <span>{name}</span>
        </div>
    );
}

const Button = () => {

}

export default Condition_button;