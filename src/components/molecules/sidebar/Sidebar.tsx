import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../atoms';

export interface SidebarProps {
    children: React.ReactNode;
    actions?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children, actions }) => {

    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className="drawer-button">
                    <Button><FontAwesomeIcon icon={faGear} /></Button>
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