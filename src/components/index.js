import { useState } from "react";
import ExpenseListComponent from "./ExpenseList";
import SidebarComponent from "./Sidebar";

const ExpenseComponent = () => {
    const [activeItem, setActiveItem] = useState(0);

    const handleActiveListItem = (index) => {
        setActiveItem(index);
    }

    return (
        <div className="flexbox">
            <SidebarComponent
                activeListItem={activeItem}
                updateActiveListItem={(params) => {
                    handleActiveListItem(params);
                }}
            />
            <div className="layout-container">
                {
                    activeItem === 0 ?
                        <ExpenseListComponent />
                        :
                        (
                            activeItem === 1
                                ?
                                "Add Expense Component"
                                :
                                (
                                    activeItem === 2
                                        ?
                                        "Analytics Page" :
                                        ""
                                )
                        )
                }
            </div>
        </div>
    );
}

export default ExpenseComponent;