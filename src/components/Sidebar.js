import { useState } from "react";

const SidebarComponent = ({ 
    activeListItem, 
    updateActiveListItem = () => {} 
}) => {
    const [activeItem, setActiveItem] = useState(0);

    // parent to child communication by calling the function
    // passed by the parent component
    const handleActiveItem = (e, index = 0) => {
        // setActiveItem(index);
        updateActiveListItem(index);
    }
    
    return (
        <div className="sidebar-container">
            <div className="sidebar-container__brand">
                Expense Tracker
            </div>
            <div className="sidebar-container__list">
                <ul>
                    <li onClick={e => handleActiveItem(e, 0)}>
                        {/* <a className={activeItem === 0 ? "active" : ""} href="javascript:void(0)"> */}
                        <a className={activeListItem === 0 ? "active" : ""} href="javascript:void(0)">
                            <span className="material-icons">insights</span>
                            <span>Expenses</span>
                        </a>
                    </li>
                    <li onClick={e => handleActiveItem(e, 1)}>
                        {/* <a className={activeItem === 1 ? "active" : ""} href="javascript:void(0)"> */}
                        <a className={activeListItem === 1 ? "active" : ""} href="javascript:void(0)">
                            <span className="material-icons">note_add</span>
                            <span>Add Expense</span>
                        </a>
                    </li>
                    <li onClick={e => handleActiveItem(e, 2)}>
                        {/* <a className={activeItem === 2 ? "active" : ""} href="javascript:void(0)"> */}
                        <a className={activeListItem === 2 ? "active" : ""} href="javascript:void(0)">
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