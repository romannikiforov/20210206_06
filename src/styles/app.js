import styled, {keyframes} from "styled-components"
import {FaSpinner} from "react-icons/fa"
import * as colors from "./colors"

export const Button = styled.button(
  {
    color: colors.white,
    cursor: "pointer",
    textTransform: "uppercase",
    padding: "0 12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "&:hover": {
      background: "lightseagreen",
    },
  },
  ({disabled}) => ({
    backgroundColor: disabled ? "black" : "lightslategray",
    "&:hover": {
      backgroundColor: disabled ? "black" : "lightslategray",
    },
  }),
)

const spin = keyframes`
 0% { transform: rotate(0deg)}
 100% { transform: rotate(360deg)}
`
export const Spinner = styled(FaSpinner)`
  animation: ${spin} 1s linear infinite;
`

export function FullSpinner() {
  return (
    <div
      style={{
        fontSize: "4em",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner aria-label="loading" />
    </div>
    //todo
  )
}
