import { useState } from "react";
import { initialItems } from "../lib/initialItems";
import Item from "./Item";

function ItemList() {
    // eslint-disable-next-line no-unused-vars
    const [itemList, setItemList] = useState(initialItems);

    return (
        <div className="form-check">
            <ul>
                {itemList.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
