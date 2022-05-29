import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectActiveModal, setActiveModal } from '../../redux/slices/modal';
import styles from './WriteModal.module.scss';

export const WriteModal: React.FC = () => {
  let router = useRouter();

  const [isBrowser, setIsBrowser] = useState(false);

  const dispatch = useAppDispatch();
  const activeModal = useAppSelector(selectActiveModal);
  const modalWrapperRef = useRef(null);
  const onClose = () => dispatch(setActiveModal(false));

  const backDropHandler = (e) => {
    if (!modalWrapperRef?.current?.contains(e.target)) {
      onClose();
      router.back();
    }
  };

  useEffect(() => {
    setIsBrowser(true);
    window.addEventListener('click', backDropHandler);
    return () => window.removeEventListener('click', backDropHandler);
  }, []);

  const handleCloseModal = (e) => {
    e.preventDefault();
    onClose();
    router.back();
  };

  const modalContent = activeModal ? (
    <div className={styles.overlay}>
      <div className={styles.wrapper} ref={modalWrapperRef}>
        <div className={styles.modal}>
          <div className={styles.modal__header}>
            <a href="#" onClick={handleCloseModal}>
              x
            </a>
          </div>
          <div className={styles.modal__body}>
            <div>Это боди</div>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'));
  } else {
    return null;
  }
};
