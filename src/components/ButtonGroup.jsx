function ButtonGroup({
    handleRemoveAllItems,
    handleResetToInitial,
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
}) {
    return (
        <div className="mt-5">
            <button
                onClick={handleMarkAllAsComplete}
                className="btn btn-primary w-100 d-block mb-2"
            >
                Mark all as complete
            </button>
            <button
                onClick={handleMarkAllAsIncomplete}
                className="btn btn-primary w-100 d-block mb-2"
            >
                Mark all as incomplete
            </button>
            <button
                onClick={handleResetToInitial}
                className="btn btn-primary w-100 d-block mb-2"
            >
                Reset to initial
            </button>
            <button
                onClick={handleRemoveAllItems}
                className="btn btn-primary w-100 d-block mb-2"
            >
                Remove all items
            </button>
        </div>
    );
}

export default ButtonGroup;
