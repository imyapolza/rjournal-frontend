import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import dynamic from "next/dynamic";
import styles from "./styles/write-modal.module.scss";
import useCloseModal from "../hooks/useCloseModal";
import { PostApi } from "../utils/api";

const Editor = dynamic(() => import("./Editor").then((m) => m.Editor), {
  ssr: false,
});

export const WriteModal: React.FC = () => {
  const router = useRouter();

  const [blocks, setBlocks] = React.useState([]);
  const [title, setTitle] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [titleIsEmpty, setIsTitleEmpty] = React.useState<boolean>(false);
  const [blocksIsEmpty, setIsBlocksEmpty] = React.useState<boolean>(false);

  useEffect(() => {
    setIsTitleEmpty(title.length === 0 ? true : false);
  }, [title]);

  useEffect(() => {
    console.log("blocks", blocks);
    setIsBlocksEmpty(Object.keys(blocks).length == 0 ? true : false);
  }, [blocks]);

  const { modalWrapperRef, isBrowser } = useCloseModal();

  const onSendBlocks = async () => {
    setIsLoading(true);
    if (!titleIsEmpty && !blocksIsEmpty) {
      const data = await PostApi.create({ title, body: blocks });
      setIsLoading(false);
    }
    setIsLoading(false);
  };

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
              <textarea
                className={styles.title}
                placeholder={"Введите заголовок"}
                onChange={(e: any) => setTitle(e.target.value)}
              />
              <Editor
                onChange={(arr) => setBlocks(arr)}
                placeholder={"Введите текст вашей статьи"}
              />
              {titleIsEmpty && (
                <div className={styles.validation}>Заголовок обязательный</div>
              )}
              {blocksIsEmpty && (
                <div className={styles.validation}>Текст обязательный</div>
              )}
              <button
                className={styles.button__save}
                onClick={onSendBlocks}
                disabled={isLoading ? true : null}
              >
                {isLoading ? "Загрузка... " : "Опубликовать"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};
