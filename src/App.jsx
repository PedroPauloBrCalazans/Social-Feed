import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk",
      role: "Gerente",
    },
    content: [
      { type: "paragraph", content: "Salve galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um carro para a oficina da Samambaia-Sul. Para fazer revisão geral, Motor e suspensão",
      },
      { type: "link", content: "maik.gerente/guara_df" },
    ],
    publishedAt: new Date("2023-06-28 20:00:30"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/PedroPauloBrCalazans.png",
      name: "Pedro Paulo",
      role: "CTO",
    },
    content: [
      { type: "paragraph", content: "Falaa pessoal 👋" },
      {
        type: "paragraph",
        content:
          "Informar que todos os carros que estava em revisões na unidade de Planaltina esta pronto.",
      },
      { type: "link", content: "pedro.CTO/planaltina_df" },
    ],
    publishedAt: new Date("2023-06-30 21:00:30"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
