import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import dynamic from 'next/dynamic';
import styles from './styles/write-modal.module.scss';
import useCloseModal from '../hooks/useCloseModal';

const Editor = dynamic(() => import('./Editor').then((m) => m.Editor), { ssr: false });

export const WriteModal: React.FC = () => {
  const router = useRouter();

  const [blocks, setBlocks] = React.useState();

  useEffect(() => {
    console.log(blocks);
  }, [blocks]);

  const { modalWrapperRef, isBrowser } = useCloseModal();

  const modalContent = (
    <div className={styles.overlay} data-overlay>
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
              <Editor onChange={(arr) => setBlocks(arr)} />
              {/* <div>
                <textarea
                  className={styles.modal__header__textarea}
                  placeholder="Заголовок"
                  maxLength={35}
                />
                <textarea className={styles.modal__body__textarea} placeholder="Текст" />
              </div> */}
              <button className={styles.button__save}>Опубликовать</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'));
  } else {
    return null;
  }
};
