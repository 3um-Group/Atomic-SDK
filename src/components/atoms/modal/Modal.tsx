import React, { useEffect } from 'react';

export interface ModalProps {
    isOpen: boolean;
    children: React.ReactNode;
    onClose: () => void;
    actions?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen = false, onClose, children, actions }) => {
    // Close the modal when clicked outside
    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if ((event.target as Element).id === 'modal-backdrop') {
            onClose();
        }
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
        isOpen && (
            <div
                id="modal-backdrop"
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                onClick={handleOutsideClick}
            >
                <div className="modal-box relative">
                    {/* <button onClick={onClose} className="btn btn-sm btn-circle absolute right-2 top-2">
            &times;
          </button> */}
                    <div className="modal-content">{children}</div>

                    {actions && <div className="modal-actions mt-4 flex justify-end">
                        <div className='flex gap-x-2'>
                        {actions}
                        </div>

                    </div>}
                </div>
            </div>
        )
    );
};

export default Modal;