const SidebarListItemComponent = ({
    data,
    handleActiveItem,
    activeListItem
}) => {
    return (
        <li onClick={e => handleActiveItem(e, data.id)}>
            <a className={activeListItem === data.id ? "active" : ""} href="javascript:void(0)">
                <span className="material-icons">{data.icon}</span>
                <span>{data.title}</span>
            </a>
        </li>
    )
}

export default SidebarListItemComponent;