import React, { useState } from "react"
import { animated } from "react-spring"
import { useClientRect } from "hooks/useClientRect"

/**
 * https://react-spring.io/common/configs
 */
const defaultConfig = {
  duration: undefined, // switch to a duration-based animation instead of spring physics
}

export const Animation = ({
  state = "on", // by default the animation will start when the component is mounted
  toggleAnimation, // animation state toggle function
  spring, // react-spring style object (instantiated w/ useSpring)
  config = defaultConfig, // react-spring configuration object
  children, // animation target component
}) => {
  React.Children.only(children)

  if (!state) {
    return children
  }

  const [domRect, domRectRef] = useClientRect()

  const onRest = () => {
    toggleAnimation("off")
  }

  return (
    <animated.div
      style={{ ...spring(config, { domRect, onRest }) }}
      ref={domRectRef}
    >
      {children}
    </animated.div>
  )
}

/**
 * Returns an array containing:
 *  animation - animation state
 *  toggleAnimation - a function for toggling or setting animation state ["on", "off"]
 */
export const useAnimation = () => {
  const state = {
    on: 1,
    off: 0,
  }

  const [animation, setAnimation] = useState(state.off)
  const toggleAnimation = (value) => setAnimation(state[value] || !animation)

  return [animation, toggleAnimation]
}
