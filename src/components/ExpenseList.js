const ExpenseListComponent = () => {
    return (

        <div className="layout-container__wrapper">
            <div className="flexbox flexbox-justify-between flexbox-align-baseline">
                <h3>Expenses</h3>
                <span className="pill info">INR 770</span>
            </div>
            <hr />
            <div className="layout-container__expenses">
                <ul>
                    <li className="flexbox flexbox-justify-between">
                        <div className="flexbox">
                            <div className="flexbox flexbox-column flexbox-align-center date">
                                <div className="month">January</div>
                                <div className="day">1</div>
                            </div>
                            <div className="flexbox flexbox-align-center">
                                <h3 className="title">Expense 2</h3>
                                <span className="type-pill">Credit</span>
                            </div>
                        </div>
                        <div className="flexbox flexbox-align-center">
                            <div className="pill">2000 INR</div>
                            <button className="actions">
                                <span className="material-icons edit">edit</span>
                            </button>
                            <button className="actions">
                                <span className="material-icons delete">delete</span>
                            </button>
                        </div>
                    </li>
                    <li className="flexbox flexbox-justify-between">
                        <div className="flexbox">
                            <div className="flexbox flexbox-column flexbox-align-center date">
                                <div className="month">January</div>
                                <div className="day">2</div>
                            </div>
                            <div className="flexbox flexbox-align-center">
                                <h3 className="title">Expense 3</h3>
                                <span className="type-pill">Debit</span>
                            </div>
                        </div>
                        <div className="flexbox flexbox-align-center">
                            <div className="pill">340 INR</div>
                            <button className="actions">
                                <span className="material-icons edit">edit</span>
                            </button>
                            <button className="actions">
                                <span className="material-icons delete">delete</span>
                            </button>
                        </div>
                    </li>
                    <li className="flexbox flexbox-justify-between">
                        <div className="flexbox">
                            <div className="flexbox flexbox-column flexbox-align-center date">
                                <div className="month">January</div>
                                <div className="day">3</div>
                            </div>
                            <div className="flexbox flexbox-align-center">
                                <h3 className="title">Expense 1</h3>
                                <span className="type-pill">Debit</span>
                            </div>
                        </div>
                        <div className="flexbox flexbox-align-center">
                            <div className="pill">890 INR</div>
                            <button className="actions">
                                <span className="material-icons edit">edit</span>
                            </button>
                            <button className="actions">
                                <span className="material-icons delete">delete</span>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ExpenseListComponent;