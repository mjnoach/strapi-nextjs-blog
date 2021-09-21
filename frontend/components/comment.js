import ReactMarkdown from "react-markdown"
import { HorizontalRule } from "styles/app.style"
import { CommentContainer } from "styles/comment.style"

const Comment = ({ data }) => {
  const { name, body } = data

  return (
    <>
      <HorizontalRule />
      <CommentContainer>
        <h2>{name}</h2>
        <ReactMarkdown source={body} escapeHtml={false} />
      </CommentContainer>
    </>
  )
}

export { Comment }
