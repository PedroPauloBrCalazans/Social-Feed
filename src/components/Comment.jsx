import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/PedroPauloBrCalazans.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro Paulo</strong>
              <time title="28 de Junho às 20:00" dateTime="2023-06-28 20:00:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Paulo, parabéns!! 👏👏</p>
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
