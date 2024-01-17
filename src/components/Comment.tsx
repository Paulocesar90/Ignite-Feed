import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';


interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps){
    const [likeCount, setLikeCont] = useState(0);


function handleDeleteComment() {
    onDeleteComment(content);
}

function handleLikeComment() {
    setLikeCont((state) => {
        return state + 1
    })
}

    return(
        <div className={styles.comment}>
            <Avatar 
            hasBorder={false} 
            src="https://github.com/Paulocesar90.png" 
            alt=""
            
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                 <header>
                    <div className={styles.authorAndTime}>
                        <strong>Paulo Cesar</strong>
                        <time title="7 de Janeiro às 14:30h" dateTime="2024-01-07 14:30:22">Cerca de 1h atrás</time>
                    </div>

                    <button onClick={handleDeleteComment} title="Deletar comentário">
                    <Trash size={24}/>
                    </button>
                 </header>

                 <p>{content}</p>
                </div>

                <footer>
                   <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                   </button> 
                </footer>
          </div>     
        </div>
    );
}