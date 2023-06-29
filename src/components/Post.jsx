import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/PedroPauloBrCalazans.png"
          />
          <div className={styles.authorInfo}>
            <strong>Paulo Pedro</strong>
            <span>Gerente loja</span>
          </div>
        </div>

        <time title="28 de Junho às 20:00" dateTime="2023-06-28 20:00:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Salve galeraa 👋 </p>
        <p>
          Acabei de subir mais um carro para a oficina da Samambaia-Sul. Para
          fazer revisão geral, Motor e suspensão.
        </p>
        <p>
          <a href="#">paulo.gerente/guara_df</a>
        </p>
        <p>
          <a href="#">#novaoficina</a> <a href="#">#samambaia</a>{" "}
          <a href="#">#guara</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe seu comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
