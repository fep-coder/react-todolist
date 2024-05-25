import Item from "./Item";

function ItemList({ handleToggleItem, items }) {
    return (
        <div className="form-check">
            <ul>
                {items.map((item, index) => (
                    <Item
                        key={index}
                        handleToggleItem={handleToggleItem}
                        item={item}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
