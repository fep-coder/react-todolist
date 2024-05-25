function Item({ handleToggleItem, item }) {
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
            <button className="btn btn-sm btn-outline-danger">Delete</button>
        </li>
    );
}

export default Item;
