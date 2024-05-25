function AddTask() {
    return (
        <form>
            <h4>Add Task</h4>
            <input className="form-control" placeholder="Add task" />
            <button className="btn btn-secondary w-100 mt-2">
                Add to list
            </button>
        </form>
    );
}

export default AddTask;
