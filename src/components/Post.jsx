import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {
console.log(props)

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src='https://github.com/albertymacedo.png' />
          <div className={styles.authorInfo}>
            <strong>Alberty Macedo</strong>
            <span>Front-End Developer</span>
          </div>
        </div>

        <time title="26 de Julho as 12:52" dateTime='2023-26-07 12:50:10'>Publicado há 1h</time>
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