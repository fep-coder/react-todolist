import AddTask from "./AddTask";
import ButtonGroup from "./ButtonGroup";
import Counter from "./Counter";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { initialItems } from "../lib/items";

function App() {
    const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items"));
    // const [items, setItems] = useState(itemsFromLocalStorage || initialItems);
    const [items, setItems] = useState(() => {
        console.log("items state changed");
        return itemsFromLocalStorage || initialItems;
    });

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

    const handleToggleItem = (title) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.title === title
                    ? { ...item, completed: !item.completed }
                    : item
            )
        );
    };

    const handleDeleteItem = (title) => {
        setItems((prevItems) =>
            prevItems.filter((item) => item.title !== title)
        );
    };

    const completedNumber = items.filter((item) => item.completed).length;
    const totalNumber = items.length;

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center">TO-DO List</h1>

                <div className="col-8">
                    <Counter
                        completedNumber={completedNumber}
                        totalNumber={totalNumber}
                    />
                    <ItemList
                        handleToggleItem={handleToggleItem}
                        handleDeleteItem={handleDeleteItem}
                        items={items}
                    />
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
