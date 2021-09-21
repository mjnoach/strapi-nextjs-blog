import styled, { css } from "styled-components"
import { animationFadeInDown } from "styles/animations.style"

const shapeCloud = css`
  width: 100px;
  height: 100px;
  -webkit-border-radius: 90px;
  -webkit-border-top-left-radius: 0;
  -moz-border-radius: 90px;
  -moz-border-radius-topleft: 0;
  border-radius: 90px;
  border-top-left-radius: 0;
`

const centeredContent = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const colorBackdrop = "rgba(0, 0, 0, 0.05)"

const shadowBackdrop = css`
  border: 1px solid #d7dbdd;
  box-shadow: 0 2px 1px ${colorBackdrop}, 0 2px 3px ${colorBackdrop},
    0 4px 8px ${colorBackdrop};
`

const inputText = css`
  font-family: Arial;
  background-color: #f0f0f0;
  display: block;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid white;
  padding: 10px 15px;
  font-size: 14px;
`

export const Form = styled.form`
  max-width: 700px;
  margin: 0px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`

export const Label = styled.label`
  line-height: 2;
  text-align: left;
  font-size: 14px;
  font-weight: 200;
  margin-bottom: 40px;
  margin-right: 30px;
`

export const Input = styled.input`
  ${inputText}
`

export const Textarea = styled.textarea.attrs({
  rows: 5,
  cols: 70,
})`
  ${inputText}
`

export const ValidationError = styled.span`
  ${animationFadeInDown}

  color: #ff0000;
`

export const Submit = styled.button.attrs({
  type: "submit",
})`
  ${shapeCloud}
  ${shadowBackdrop}
  ${centeredContent}

  /* background-color: #c5dbf4; */
  background-color: #ffffff;
  color: #3874ea;

  border: none;
  margin-top: 40px;
  cursor: pointer;

  [data-icon] {
    position: relative;
    left: -5px;
  }
`
