import { Avatar } from './Avatar';
import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
     <Avatar hasBorder={false} src="https://github.com/chrystianraony.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Chrystian Raony Perazzoli</strong>
              <time title="22 de Julho às 10:35" dateTime="2022-07-22 10:35:00">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar Comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom Dev, parabéns!</p>

        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
