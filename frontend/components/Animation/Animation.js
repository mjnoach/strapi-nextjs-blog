import React from "react"
import { animated } from "react-spring"
import { useClientRect } from "utils"

/**
 * https://react-spring.io/common/configs
 */
const defaultConfig = {
  duration: undefined, // switch to a duration-based animation instead of spring physics
}

/**
 * @param {object} spring react-spring style object (instantiated w/ useSpring)
 * @param {object} config react-spring configuration object
 * @param {object} children animation target component
 */
export const Animation = ({ spring, config = defaultConfig, children }) => {
  React.Children.only(children)
  const [domRect, domRectRef] = useClientRect()

  return (
    <animated.div style={{ ...spring(config, { domRect }) }} ref={domRectRef}>
      {children}
    </animated.div>
  )
}
