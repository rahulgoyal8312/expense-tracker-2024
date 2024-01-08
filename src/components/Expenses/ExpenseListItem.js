const MONTH = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

const ExpenseListItemComponent = ({ data, ...rest }) => {
    const date = new Date(data.date);
    const month = date.getMonth();
    const day = date.getDate();

    return (
        <li className="flexbox flexbox-justify-between">
            <div className="flexbox">
                <div className="flexbox flexbox-column flexbox-align-center date">
                    <div className="month">{MONTH[month]}</div>
                    <div className="day">{day}</div>
                </div>
                <div className="flexbox flexbox-align-center">
                    <h3 className="title">{data.title}</h3>
                    <span className="type-pill">{data.type}</span>
                </div>
            </div>
            <div className="flexbox flexbox-align-center">
                <div className="pill">{data.amount} INR</div>
                <button className="actions" onClick={() => alert("Edit this Item")}>
                    <span className="material-icons edit">edit</span>
                </button>
                <button className="actions" onClick={() => alert("Delete this Item")}>
                    <span className="material-icons delete">delete</span>
                </button>
            </div>
        </li>
    );
}

export default ExpenseListItemComponent;