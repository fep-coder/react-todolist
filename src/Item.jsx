function Item() {
    return (
        <li>
            <label>
                <input type="checkbox" className="form-check-input" />
                Default checkbox
            </label>
            <button className="btn btn-sm btn-outline-danger justify-content-end">
                Delete
            </button>
        </li>
    );
}

export default Item;
