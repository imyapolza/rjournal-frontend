import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectActiveModal, setActiveModal } from '../redux/slices/modal';
import styles from './styles/write-modal.module.scss';

export const WriteModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isBrowser, setIsBrowser] = useState(false);
  const activeModal = useAppSelector(selectActiveModal);
  const modalWrapperRef = useRef();

  const backDropHandler = (e) => {
    const isCloseBtn = e.target.getAttribute('data-close-btn');

    if (!modalWrapperRef?.current?.contains(e.target) || isCloseBtn) {
      dispatch(setActiveModal(false));
      router.back();
    }
  };

  useEffect(() => {
    setIsBrowser(true);
    window.addEventListener('click', backDropHandler);

    if (router.asPath.slice(1) === 'write' && !activeModal) {
      dispatch(setActiveModal(true));
    }

    return () => window.removeEventListener('click', backDropHandler);
  }, []);

  const modalContent = activeModal ? (
    <div className={styles.overlay}>
      <div className={styles.wrapper} ref={modalWrapperRef}>
        <div className={styles.modal}>
          <div className={styles.modal__header}>
            <button className={styles.button__close}>
              <img
                className={styles.close__icon}
                src="/static/img/close.png"
                alt="close"
                data-close-btn
              />
            </button>
          </div>
          <div className={styles.modal__body}>
            <div className={styles.writing__header}>
              <div>
                <textarea
                  className={styles.modal__header__textarea}
                  placeholder="Заголовок"
                  maxLength={60}></textarea>
                <textarea className={styles.modal__body__textarea} placeholder="Текст"></textarea>
              </div>
              <button className={styles.button__save}>Опубликовать</button>
            </div>
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
