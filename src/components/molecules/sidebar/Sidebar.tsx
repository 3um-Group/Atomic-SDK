import React, { useEffect } from 'react';

export interface SidebarProps {
    isOpen: boolean;
    children: React.ReactNode;
    onClose: () => void;
    actions?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = false, onClose, children, actions }) => {

    return (
        
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
            {/* Page content here */}
                <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open Sidebar</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                {children}
            </div>
        </div>
    );
};

export default Sidebar;