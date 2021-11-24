import { useTransition } from "react-spring"

// this as a func or a variable?
const zoomOutRight = (item) => {
  return useTransition(item, item.id, {
    from: {
      opacity: 1,
      transform: `scale(1)`,
    },
    enter: {},
    leave: {},
  })
}

const zoomInLeft = () => {
  return useTransition(item, item.id, {
    from: {
      opacity: 1,
      transform: `scale(1)`,
    },
    enter: {},
    leave: {},
  })
}
