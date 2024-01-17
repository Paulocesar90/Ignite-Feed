import { Post, PostType } from "./components/Post"
import { Header } from "./components/Header"
import './global.css'
import styles from './App.module.css';


import { Sidebar } from "./components/Sidebar";


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl:'https://img.freepik.com/fotos-gratis/foto-de-close-up-de-uma-modelo-de-pele-escura-atraente-emotiva-feliz-e-amigavel-com-penteado-afro-posando-nua-sorrindo-amplamente-e-piscando-como-se-sugerisse-algum-conceito-ou-segredo-interessante_176420-23192.jpg?w=740&t=st=1704997637~exp=1704998237~hmac=4c6b22c6d38c8fc761ef0b48e51ad52619bec229ca4517ae69b1fd164f9621f1',
      name: 'Viviane Almeida',
      role: 'Dev Java'
    },
    content: [
          { type: 'paragraph', content: 'Fala galeraa 👋'},
          { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-01-13 15:50'),
  },
  {
    id: 2,
    author: {
      avatarUrl:'https://img.freepik.com/fotos-gratis/mulher-atraente-sem-defeitos-manchas-tocando-a-pele-pura-e-limpa-e-sorrindo-de-alegria-sentindo-felicidade-olhando-a-camera-com-ternura_176420-37610.jpg?t=st=1704999085~exp=1704999685~hmac=08a1afea1b51e61b86323f1450077edae937ea0ffa80e9cb618060a5462b6d37',
      name: 'Gabriela Pereira',
      role: 'Marketing'
    },
    content: [
          { type: 'paragraph', content: 'Fala galeraa 👋'},
          { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-01-06 12:50'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      
      <div className={styles.wrapper}>
         <Sidebar />
          <main>
          {posts.map(post => {
            return (
            <Post 
              key={post.id}
              post={post}
            />
            )
          })}
         </main>
      </div>
    </div>
    )
  }
  
