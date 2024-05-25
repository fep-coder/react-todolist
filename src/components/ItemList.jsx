import Item from "./Item";

function ItemList({ handleToggleItem, handleDeleteItem, items }) {
    return (
        <div className="form-check">
            {items.length === 0 && (
                <p className="text-center">Nothing to do...</p>
            )}
            <ul>
                {items.map((item, index) => (
                    <Item
                        key={index}
                        handleToggleItem={handleToggleItem}
                        handleDeleteItem={handleDeleteItem}
                        item={item}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
