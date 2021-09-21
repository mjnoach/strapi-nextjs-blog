import { useFormContext } from "react-hook-form"
import { Textarea } from "styles/comment-form.style"

// TODO: replace textarea with rich text editor
const RichTextEditor = ({ name, required }) => {
  const { register } = useFormContext()

  return <Textarea {...register(name, { required })} />
}

export { RichTextEditor }
