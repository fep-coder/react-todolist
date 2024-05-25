import Item from "./Item";

function ItemList({ items }) {
    return (
        <div className="form-check">
            <ul>
                {items.map((item, index) => (
                    <Item key={index} item={item} />
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
