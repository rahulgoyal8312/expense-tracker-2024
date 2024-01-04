const SidebarComponent = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-container__brand">
                Expense Tracker
            </div>
            <div className="sidebar-container__list">
                <ul>
                    <li>
                        <a className="active" href="/">
                            <span className="material-icons">insights</span>
                            <span>Expenses</span>
                        </a>
                    </li>
                    <li>
                        <a href="/add">
                            <span className="material-icons">note_add</span>
                            <span>Add Expense</span>
                        </a>
                    </li>
                    <li>
                        <a href="/analytics">
                            <span className="material-icons">analytics</span>
                            <span>Analytics</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SidebarComponent;