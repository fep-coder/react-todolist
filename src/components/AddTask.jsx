import { useRef, useState } from "react";

function AddTask({ handleAddItem }) {
    const [itemText, setItemText] = useState("");
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!itemText) {
            alert("Please add a task");
            inputRef.current.focus();
            return;
        }

        handleAddItem({
            title: itemText,
            completed: false,
        });

        setItemText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>Add Task</h4>
            <input
                value={itemText}
                onChange={(e) => setItemText(e.target.value)}
                ref={inputRef}
                className="form-control"
                placeholder="Add task"
            />
            <button className="btn btn-secondary w-100 mt-2">
                Add to list
            </button>
        </form>
    );
}

export default AddTask;
