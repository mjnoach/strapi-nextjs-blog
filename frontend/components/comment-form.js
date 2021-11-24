import { getStrapiURL } from "lib/api"
import { useForm, FormProvider } from "react-hook-form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import { HorizontalRule } from "styles/app.style"
import {
  Form,
  Row,
  Label,
  Input,
  ValidationError,
  Submit,
} from "styles/comment-form.style"
import { Animation, useAnimationControl } from "components/Animation"
import { fadeInDown, fadeOut } from "components/Animation/springs"
import { RichTextEditor } from "./rich-text-editor"

const CommentForm = ({ article }) => {
  const methods = useForm({
    defaultValues: {
      name: "My Name",
      email: "my@email.com",
      body: "Lorem ipsum dolor **bla bla bla**",
    },
  })
  const {
    register,
    formState: { errors },
  } = methods

  const [submitAnimation, toggleSubmitAnimation] = useAnimationControl()

  const onSubmit = async (data) => {
    toggleSubmitAnimation("on")
    const requestUrl = getStrapiURL("/comments")
    const res = await fetch(requestUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    res.ok && methods.reset()
  }

  return (
    <>
      <HorizontalRule />
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <Row>
            <Label htmlFor="name">
              <h4>name</h4>
              <Input
                type="text"
                autoComplete="name"
                {...register("name", { required: true })}
              />
              <Validation errors={errors.name} />
            </Label>

            <Label htmlFor="email">
              <h4>email</h4>
              <Input
                type="email"
                autoComplete="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              <Validation errors={errors.email} />
            </Label>
          </Row>

          <Label htmlFor="body">
            <h3>leave a comment...</h3>
            <RichTextEditor name="body" required={true} />
            <Validation errors={errors.body} />
          </Label>

          <input
            type="hidden"
            {...register("article")}
            defaultValue={article.id}
          />

          <Submit>
            <Animation
              state={submitAnimation}
              toggleAnimation={toggleSubmitAnimation}
              spring={fadeOut}
              config={{ duration: 2000 }}
            >
              <FontAwesomeIcon icon={faPaperPlane} size="3x" />
            </Animation>
          </Submit>
        </Form>
      </FormProvider>
    </>
  )
}

const Validation = ({ errors }) => {
  return (
    errors?.type === "required" && (
      <Animation spring={fadeInDown} config={{ duration: 200 }}>
        <ValidationError>This field is required</ValidationError>
      </Animation>
    )
  )
}

export { CommentForm }
