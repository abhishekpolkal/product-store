// src/components/Toast.js
export default function Toast({ message, visible }) {
    if (!visible) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#28a745',
            color: '#fff',
            padding: '8px 16px',
            borderRadius: '4px',
            zIndex: 1000
        }}>
            {message}
        </div>
    );
}
