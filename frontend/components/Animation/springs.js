import { useSpring } from "react-spring"

const slideDown = (config, { domRect, distance }) =>
  useSpring({
    config,
    from: {
      marginBottom: `-${domRect?.height || distance || 0}px`,
    },
    to: {
      marginBottom: "0px",
    },
  })

const fadeIn = (config) =>
  useSpring({
    config,
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  })

export const fadeInDown = (config, { domRect }) => ({
  ...fadeIn(config),
  ...slideDown(config, { domRect }),
})

export const fadeOut = (config, { onRest }) =>
  useSpring({
    config,
    from: { opacity: 1 },
    to: { opacity: 0 },
    onRest,
  })
