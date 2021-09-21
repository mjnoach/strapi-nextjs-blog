import { css, keyframes } from "styled-components"
import { fadeInDown } from "react-animations"

const animate = (animation) => keyframes`${animation}`

export const animationFadeInDown = css`
  animation: 0.5s ${animate(fadeInDown)};
`
