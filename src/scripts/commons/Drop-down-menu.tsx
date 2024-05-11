import { useState } from "react";

interface option {
    label :string;
    value :string;
}
type Props = {
    options :option[],
    func :() => void
}

const Drop_down_menu = ({options, func} :Props) => {
    const [selected_option, set_selected_option] = useState<option | null>(null);
    const handle_click = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selected_value = event.target.value;
        const selected = options.find((obj) => obj.value === selected_value);
        set_selected_option(selected || null);
        func();
        console.log(selected_option);
    }
    return (
        <div>
            <select
                value={selected_option?.value || ''}
                onChange={handle_click}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Drop_down_menu;