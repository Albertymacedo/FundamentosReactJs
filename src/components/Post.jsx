/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt  }) {
  const publishedDataFormat = format(new Date(2023, 5, 3, 20, 0), "dd 'de' MMMM 'de' yyyy 'às' HH:mm'h' ",{
    locale: ptBR,
  });

  const publishedDateRelativeNow = formatDistanceToNow(new Date(2023, 5, 3, 20, 0), {
  locale: ptBR,
  addSuffix: true
}) 

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>s
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDataFormat} dateTime>
        {publishedDateRelativeNow}
        </time>
      </header>
      <div className={styles.content}>

      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder='Deixe um comentário'
        />

        <footer>
        <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}