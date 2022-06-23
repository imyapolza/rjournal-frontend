import React from 'react';
import styles from './styles/side-comments.module.scss';
import Comment from './Comment';

export const SideComments = () => {
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

  return (
    <div className={styles.side__comments}>
      <div className={styles.comments__title__block}>
        <h2 className={styles.comments__title}>Комментарии</h2>
        <img className={styles.img__arrow} src="./static/img/sideComments/next.png" alt="next" />
      </div>
      {data.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
};
