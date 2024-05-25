function Item({ handleToggleItem, handleDeleteItem, item }) {
    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    className="form-check-input"
                    checked={item.completed}
                    onChange={() => handleToggleItem(item.title)}
                />
                {item.title}
            </label>
            <button
                onClick={() => handleDeleteItem(item.title)}
                className="btn btn-sm btn-outline-danger"
            >
                Delete
            </button>
        </li>
    );
}

export default Item;
