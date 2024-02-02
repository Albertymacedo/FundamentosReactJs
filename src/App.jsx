/* eslint-disable react/jsx-key */
import { Post } from './components/Post'
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/albertymacedo.png',
      name: 'Alberty Macedo',
      role: 'Full stack Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no React, evento da Rocketseat. O nome do projeto é MeuPost 🚀'},
      {type: 'link', content: 'alberty.macedo/react'},

    ],
    publishedAt: new Date('2023-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/albertymacedo.png',
      name: 'Alberty Macedo',
      role: 'Full stack Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no React, evento da Rocketseat. O nome do projeto é MeuPost 🚀'},
      {type: 'link', content: 'alberty.macedo/react'},

    ],
    publishedAt: new Date('2023-05-03 20:00:00')
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
               author = {post.author}
               content = {post.content}
               publishedAt = {post.publishedAt}
               />
               )
          })}
        </main>
      </div>
    </div>
  )
}





