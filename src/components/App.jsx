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

    const handleRemoveAllItems = () => {
        setItems([]);
    };

    const handleResetToInitial = () => {
        setItems(initialItems);
    };

    const handleMarkAllAsComplete = () => {
        setItems((prevItems) =>
            prevItems.map((item) => ({ ...item, completed: true }))
        );
    };

    const handleMarkAllAsIncomplete = () => {
        setItems((prevItems) =>
            prevItems.map((item) => ({ ...item, completed: false }))
        );
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
                    <ButtonGroup
                        handleRemoveAllItems={handleRemoveAllItems}
                        handleResetToInitial={handleResetToInitial}
                        handleMarkAllAsComplete={handleMarkAllAsComplete}
                        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
