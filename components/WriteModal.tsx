import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectActiveModal, setActiveModal } from '../redux/slices/modal';
import dynamic from 'next/dynamic';
import styles from './styles/write-modal.module.scss';

const Editor = dynamic(() => import('./Editor').then((m) => m.Editor), { ssr: false });

export const WriteModal: React.FC = () => {
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const router = useRouter();
  const [isBrowser, setIsBrowser] = useState<boolean>(false);
  const modalWrapperRef = useRef<HTMLDivElement>(null);
  const [blocks, setBlocks] = React.useState();

  useEffect(() => {
    console.log(blocks);
  }, [blocks]);

  const backDropHandler = (e): void => {
    const isCloseClick = e.target.getAttribute('data-close-btn');

    if (!modalWrapperRef?.current?.contains(e.target) || isCloseClick) {
      setActiveModal(false);
      router.back();
    }
  };

  useEffect(() => {
    setIsBrowser(true);
    window.addEventListener('click', backDropHandler);

    if (router.asPath.slice(1) === 'write' && !activeModal) {
      setActiveModal(true);
    }

    return () => window.removeEventListener('click', backDropHandler);
  }, []);

  const modalContent = activeModal ? (
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
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'));
  } else {
    return null;
  }
};
