function ButtonGroup() {
    return (
        <div className="mt-5">
            <button className="btn btn-primary w-100 d-block mb-2">
                Mark all as complete
            </button>
            <button className="btn btn-primary w-100 d-block mb-2">
                Mark all as incomplete
            </button>
            <button className="btn btn-primary w-100 d-block mb-2">
                Reset to initial
            </button>
            <button className="btn btn-primary w-100 d-block mb-2">
                Remove all items
            </button>
        </div>
    );
}

export default ButtonGroup;
