import { PencilLine } from 'phosphor-react'



import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';


export function Sidebar() {
    return (
    <aside className={styles.sidebar}>
    <img 
    className={styles.cover}
    src="https://blog.gokursos.com/wp-content/uploads/2021/09/ilya-pavlov-OqtafYT5kTw-unsplash-1-1198x800.jpg" 
    />

    <div className={styles.profile}>
      <Avatar src="https://github.com/Paulocesar90.png"/>
    <strong>Paulo Cesar</strong>
    <span>Web Developer</span>
    </div>

    <footer>
        <a href="#" >
        <PencilLine size={20}/>
        Editar seu perfil
        </a>
    </footer>
    </aside>
    );

}