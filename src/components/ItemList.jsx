import { useState } from "react";
import Item from "./Item";

function ItemList({ handleToggleItem, handleDeleteItem, items }) {
    const [sortBy, setSortBy] = useState("default");

    const handleSelect = (e) => {
        setSortBy(e.target.value);
        console.log(e.target.value);
    };

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "completed") {
            return b.completed - a.completed;
        } else if (sortBy === "notCompleted") {
            return a.completed - b.completed;
        }
    });

    return (
        <>
            <select className="form-select mb-4" onChange={handleSelect}>
                <option value="default">Default</option>
                <option value="completed">Completed</option>
                <option value="notCompleted">Not completed</option>
            </select>
            <div className="form-check">
                {items.length === 0 && (
                    <p className="text-center">Nothing to do...</p>
                )}
                <ul>
                    {sortedItems.map((item, index) => (
                        <Item
                            key={index}
                            handleToggleItem={handleToggleItem}
                            handleDeleteItem={handleDeleteItem}
                            item={item}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ItemList;
