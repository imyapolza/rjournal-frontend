import React, { useState } from 'react';
import styles from './styles/side-comments.module.scss';
import Comment from './Comment';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setIsHidden } from '../../redux/slices/comment';

export const SideComments = () => {
  const dispatch = useAppDispatch();
  const isHidden = useAppSelector((state) => state.comment.isHidden);

  const data = [
    {
      id: 1,
      name: 'Николай Петрович',
      comment:
        'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать еще на часок. Ну и...',
      avatarUrl: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
    },
    {
      id: 2,
      name: 'Николай Петрович',
      comment:
        'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать еще на часок. Ну и...',
      avatarUrl: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
    },
    {
      id: 3,
      name: 'Николай Петрович',
      comment:
        'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать еще на часок. Ну и...',
      avatarUrl: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg',
    },
  ];

  function handleComments() {
    dispatch(setIsHidden(!isHidden));
  }

  return (
    <div className={styles.side__comments}>
      <div
        className={`${styles.comments__title__block} ${isHidden && styles.hidden__comments}`}
        onClick={handleComments}>
        <h2 className={styles.comments__title}>Комментарии</h2>
        <img className={styles.img__arrow} src="/./static/img/side-comments/next.png" alt="next" />
      </div>
      <div>
        {!isHidden && data && (
          <div>
            {data.map((comment) => (
              <Comment key={comment.id} {...comment} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
