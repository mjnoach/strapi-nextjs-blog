import { CommentForm } from "components/comment-form"
import { Comment } from "components/comment"

const Comments = ({ article, collection }) => {
  return (
    <>
      <CommentForm article={article} />
      {collection.map((data) => (
        <Comment key={data.id} data={data} />
      ))}
    </>
  )
}

export { Comments }
