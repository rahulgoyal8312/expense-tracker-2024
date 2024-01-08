import { useState } from "react";
import SidebarListItemComponent from "./SidebarListItem";

const SidebarComponent = ({ 
    activeListItem, 
    updateActiveListItem = () => {} 
}) => {
    const [activeItem, setActiveItem] = useState(0);
    const data = [
        {
            id: 0,
            title: "Expenses",
            icon: "insights",
            path: "/"
        },
        {
            id: 1,
            title: "Add Expense",
            icon: "note_add",
            path: "/add-expense"
        },
        {
            id: 2,
            title: "Analytics",
            icon: "analytics",
            path: "/analytics"
        }
    ];

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
                    {/* <SidebarListItemComponent
                        data={data[0]}
                        activeListItem={activeListItem}
                        handleActiveItem={handleActiveItem}
                    />
                    <SidebarListItemComponent
                        data={data[1]}
                        activeListItem={activeListItem}
                        handleActiveItem={handleActiveItem}
                    />
                    <SidebarListItemComponent
                        data={data[2]}
                        activeListItem={activeListItem}
                        handleActiveItem={handleActiveItem}
                    /> */}
                    {/* {
                        [
                            <span>Hello</span>,
                            <span>This</span>,
                            <span>is</span>,
                            <span>React</span>,
                            <span>Tutorial</span>,
                        ]
                    } */}
                    {
                        data.map((item, index) => {
                            return (
                                <SidebarListItemComponent
                                    key={item.id}
                                    data={item}
                                    activeListItem={activeListItem}
                                    handleActiveItem={handleActiveItem}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default SidebarComponent;