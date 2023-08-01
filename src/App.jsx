import { Post } from './components/Post'
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';
export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post
        author= "Alberty Macedo"
        content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, minima libero commodi cum nemo sit veniam voluptate fugiat soluta maxime nihil culpa ipsa. Libero quae, dolores aspernatur voluptatum id neque?" 
      />
      <Post
              author= "Pessoa Aleatória"
              content= "Hoje foi um dia produtivo!" 
            />
        </main>
      </div>
    </div>
  )
}





