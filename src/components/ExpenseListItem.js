const ExpenseListItemComponent = ({ data, ...rest }) => {
    return (
        <li className="flexbox flexbox-justify-between">
            <div className="flexbox">
                <div className="flexbox flexbox-column flexbox-align-center date">
                    <div className="month">{data.month}</div>
                    <div className="day">{data.day}</div>
                </div>
                <div className="flexbox flexbox-align-center">
                    <h3 className="title">{data.title}</h3>
                    <span className="type-pill">{data.type}</span>
                </div>
            </div>
            <div className="flexbox flexbox-align-center">
                <div className="pill">{data.amount} INR</div>
                <button className="actions">
                    <span className="material-icons edit">edit</span>
                </button>
                <button className="actions">
                    <span className="material-icons delete">delete</span>
                </button>
            </div>
        </li>
    );
}

export default ExpenseListItemComponent;