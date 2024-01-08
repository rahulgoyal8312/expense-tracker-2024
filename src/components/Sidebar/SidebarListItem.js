import { NavLink, Link } from "react-router-dom";

const SidebarListItemComponent = ({
    data,
    handleActiveItem,
    activeListItem
}) => {

    // by default class would be `active`.
    return (
        <li onClick={e => handleActiveItem(e, data.id)}>
            {/* <a className={activeListItem === data.id ? "active" : ""} href={data.path}> */}
            <NavLink 
                to={data.path} 
                className={
                    ({ isActive, isPending, isTransitioning }) => isActive ? "active-item" : ""
                }
            >
                <span className="material-icons">{data.icon}</span>
                <span>{data.title}</span>
            </NavLink>
            {/* </a> */}
        </li>
    )
}

export default SidebarListItemComponent;