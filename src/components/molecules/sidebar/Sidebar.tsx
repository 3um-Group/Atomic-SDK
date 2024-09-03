import React, { useEffect } from 'react';

export interface SidebarProps {
    isOpen: boolean;
    children: React.ReactNode;
    onClose: () => void;
    actions?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = false, onClose, children, actions }) => {
    // Close the sidebar when clicked outside
    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
        // if ((event.target as Element).id === 'modal-backdrop') {
            onClose();
        // }
    };

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    return (
        // isOpen && (
            // <div
            //     id="modal-backdrop"
            //     className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            //     onClick={handleOutsideClick}
            // >
            //     <div className="modal-box relative">
            //         <div className="modal-content">{children}</div>

            //         {actions && <div className="modal-actions mt-4 flex justify-end">
            //             <div className='flex gap-x-2'>
            //             {actions}
            //             </div>

            //         </div>}
            //     </div>
            // </div>
        // )
        
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
            {/* Page content here */}
                <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                {children}
                {/* <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4"> */}
                    {/* Sidebar content here */}
                    {/* {children} */}
                    {/* <li><a>Sidebar Item 1</a></li> */}
                    {/* <li><a>Sidebar Item 2</a></li> */}
                {/* </ul> */}
            </div>
        </div>
    );
};

export default Sidebar;