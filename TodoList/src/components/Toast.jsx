import React, { useEffect } from 'react';

const Toast = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`toast toast-${type}`}>
            {type === 'success' && <span className="toast-icon">✨</span>}
            {type === 'error' && <span className="toast-icon">⚠️</span>}
            <span className="toast-message">{message}</span>
        </div>
    );
};

export default Toast;
