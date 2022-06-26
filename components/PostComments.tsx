import React, { useState, useEffect } from 'react';
import styles from './styles/post-comments.module.scss';
import Comment from './Comment';
import data from '../data';
import clsx from 'clsx';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PostComments = () => {
  const [activeButton, setActiveButton] = useState(false);

  console.log('activeButton', activeButton);

  console.log('data', data);

  const [inProp, setInProp] = useState(false);

  return (
    <div className={styles.comments} style={{ height: '1500px' }}>
      <div className={styles.comments__wrapper}>
        <div className={styles.comments__length}>{`${
          data.comments.popular.length + data.comments.new.length
        } комментария`}</div>
        <div className={styles.comments__buttons}>
          <button
            className={clsx(
              styles.button__popular,
              styles.button,
              !activeButton && styles.button__active,
            )}
            onClick={() => setActiveButton(false)}>
            популярные
          </button>
          <button
            className={clsx(styles.button, activeButton && styles.button__active, styles.buttons)}
            onClick={() => setActiveButton(true)}>
            по порядку
          </button>
          <div className={styles.border}>
            <div
              className={`${styles.border__active} ${
                activeButton ? styles.button__order : styles.button__popular
              }`}></div>
          </div>
          <input
            className={styles.comment__create}
            type="text"
            placeholder="Написать комментарий..."
          />
        </div>
        {/* <TransitionGroup>
          <CSSTransition key={Date.now()} timeout={200} unmountOnExit>
            <div>
              {!activeButton &&
                data.comments.new.map((comment, index) => (
                  <Comment key={Date.now()} comment={comment} />
                ))}
              {activeButton &&
                data.comments.popular.map((comment, index) => (
                  <Comment key={Date.now()} comment={comment} />
                ))}
            </div>
          </CSSTransition>
        </TransitionGroup> */}

        <CSSTransition
          in={!activeButton}
          timeout={500}
          classNames="alert"
          onExiting={() => setActiveButton(true)}
          unmountOnExit>
          <div>
            {!activeButton &&
              data.comments.popular.map((comment, index) => (
                <Comment key={Date.now()} comment={comment} />
              ))}
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeButton}
          timeout={500}
          classNames="alert_2"
          onExiting={() => setActiveButton(false)}
          unmountOnExit>
          <div>
            {activeButton &&
              data.comments.new.map((comment, index) => (
                <Comment key={Date.now()} comment={comment} />
              ))}
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default PostComments;
