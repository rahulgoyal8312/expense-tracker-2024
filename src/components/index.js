import ExpenseListComponent from "./ExpenseList";
import SidebarComponent from "./Sidebar";

const ExpenseComponent = () => {
    return (
        <div className="flexbox">
            <SidebarComponent/>
            <div className="layout-container">
                <ExpenseListComponent/>
            </div>
        </div>
    );
}

export default ExpenseComponent;