'use client';
import { useState } from "react";

export default function Home(){
    const [components, setComponents] = useState([{ id: 0, key: Date.now() }]);

    const handleAddComponent = () => {
        const newId = Date.now();
        setComponents([...components, { id: newId, key: newId }]);
    };

    const removeComponent = (id) => {
        setComponents(components.filter((item) => item.id !== id));
    };

    return(
        <>
        {components.map((item) => (
            <Ing key={item.key} id={item.id} removeComponent={removeComponent} />
        ))}
        <button onClick={handleAddComponent} type="button">Добавить компонент</button>
        </>
    );
}

function Ing({ id, removeComponent }) {
    return (
        <div>
            <input placeholder='Инг'/><br/>
            <input placeholder='кол'/>
            <select>
                <option>Без группы</option>
            </select>
            <button onClick={() => removeComponent(id)} type="button">Удалить</button>
        </div>
    );
}
