import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';
import closeIcon from '../../images/close-icon.png';

type Props = {
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal: React.FC<Props> = ({ onClose, children }) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <div
      className="modal__overlay"
    >
      <div className="modal__content">
        <button
          className="modal__close-btn"
          type="button"
          onClick={onClose}
        >
          <img
            src={closeIcon}
            width="19px"
            alt="close icon"
          />
        </button>
        <div style={{ paddingLeft: '15px', fontWeight: 'bold', marginBottom: '30px' }}>Are you sure you want to delete this item?</div>
        {children}
      </div>
    </div>,
    document.querySelector('#root') as Element,
  );
};