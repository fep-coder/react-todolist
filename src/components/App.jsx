import AddTask from "./AddTask";
import ButtonGroup from "./ButtonGroup";
import Counter from "./Counter";
import ItemList from "./ItemList";
import Select from "./Select";
import { useState } from "react";
import { initialItems } from "../lib/items";

function App() {
    const [items, setItems] = useState(initialItems);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center">TO-DO List</h1>

                <div className="col-8">
                    <Counter />
                    <Select />
                    <ItemList items={items} />
                </div>
                <div className="col-4">
                    <AddTask handleAddItem={handleAddItem} />
                    <ButtonGroup />
                </div>
            </div>
        </div>
    );
}

export default App;
