import { format, formatDistanceToNow, set } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link } from "phosphor-react";
import { useEffect, useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
  const [comments, setcomments] = useState(['Post muito bacana']);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' H:mm'h'", // formatando data por date-fns
    { locale: ptBR } /*Formatação da data usando date-fns*/
  );
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    //Referente ao tempo de publicação
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();
    setcomments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(){
    setNewCommentText(event.target.value);
  }


  // useEffect(() => {
  //   console.log("COMMENTS ALTERADO: ", comments.length)
  // }, [comments])

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      {/*Editando o conteudo que foi setado como paragrafo e link*/}
      <div className={styles.content}>
        {content.map((line) => { //line foi criado aqui
          if (line.type == "paragraph") {  //se a linha tiver um tipo paragrafo retorne o conteudo dela
            return <p>{line.content}</p>;
          } else if (line.type == "link") {  //senao se tiver um link retorne o conteudo do link adicionado
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          } else if (line.type == "social") {
            return (
              <div className={styles.socialLink}>
                {line.content.map((item) => {
                  return (
                    <p>
                      <a href="#">{item.content}</a>
                    </p>
                  );
                })}
              </div>
            );
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name="comment"
          placeholder="Deixe um comentário" 
          value={newCommentText}  //dizendo para pegar o valor inicial do newCommentText, para deixar o textarea em branco
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment content={comment} />;
        })}
      </div>
    </article>
  );
}
