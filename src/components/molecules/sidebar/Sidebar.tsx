import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

export interface SidebarProps {
    children: React.ReactNode;
    actions?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children, actions }) => {

    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label aria-label="Open menu" htmlFor="my-drawer" className="btn btn-ghost drawer-button">
                    <FontAwesomeIcon icon={faBars} />
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                {}
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {children}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;