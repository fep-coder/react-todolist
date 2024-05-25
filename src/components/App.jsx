import AddTask from "./AddTask";
import ButtonGroup from "./ButtonGroup";
import Counter from "./Counter";
import Item from "./Item";
import ItemList from "./ItemList";
import Select from "./Select";

function App() {
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center">TO-DO List</h1>

                <div className="col-8">
                    <Counter />
                    <Select />
                    <ItemList>
                        <Item />
                        <Item />
                        <Item />
                    </ItemList>
                </div>
                <div className="col-4">
                    <AddTask />
                    <ButtonGroup />
                </div>
            </div>
        </div>
    );
}

export default App;
