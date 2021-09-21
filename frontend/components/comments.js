import { CommentForm } from "components/comment-form"
import { Comment } from "components/comment"

const Comments = ({ article, collection }) => {
  collection = collection.sort((a, b) =>
    b.created_at.localeCompare(a.created_at)
  )

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
