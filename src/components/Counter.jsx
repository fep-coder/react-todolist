function Counter({ completedNumber, totalNumber }) {
    return (
        <h5 className="text-end">
            Done: {completedNumber} / {totalNumber}
        </h5>
    );
}

export default Counter;
