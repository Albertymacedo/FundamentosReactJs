import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
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
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no React, evento da Rocketseat. O nome do projeto é MeuPost 🚀</p>
        <p>👉 {' '} <a href=''> alberty.macedo/react</a></p>
        <p>
          <a href=''>#novoprojeto</a>{'  '}
          <a href=''> #nlw </a>{'  '}
          <a href=''>#rocketseat </a>
        </p>
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