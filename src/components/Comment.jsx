import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/gidaltinascimento.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header> 
            <div className={styles.authorAndTime}>
              <strong>Gidalti Nascimento {' '}</strong>
              <time title=' 27 de Julho de 2023' dateTime='2023-27-07 11:26:30'>Cerca de 1h atrás</time>
            </div>

            <button title='deletar comentário'>
            <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>      
    </div>
  )

}