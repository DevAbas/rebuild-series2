import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.div)`
  height: 0px;
  width: 100%;
  position: absolute;
  top: 72px;
  left: 0;
  right: 0;
  z-index: 99;
`

export const Logo = styled.div`
  a {
    font-size: 1.8rem;
    font-weight: 800;
    color: ${({ theme }) => theme.text};
    user-select: none;
  }

  span {
    width: 1rem;
    height: 1rem;
    background: ${({ theme }) => theme.red};
    margin: 0 4px;
    border-radius: 100%;
    display: inline-block;
    position: relative;
    bottom: 2px;
  }
`

export const Menu = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;
    span {
      width: 36px;
      height: 8px;
      display: block;
      background: ${props => props.theme.text};
      margin: 8px;
    }
  }
`
