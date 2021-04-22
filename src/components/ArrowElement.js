import {Link} from 'react-scroll'
import styled  from '@emotion/styled'
import {keyframes} from '@emotion/react'
import { FaArrowCircleUp, FaArrowCircleDown} from 'react-icons/fa'

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`
export const UpArrow = styled(FaArrowCircleUp)`
  width: 50px;
  height: 50px;
  margin-top: -50px;
  color: white;
  animation-name: ${bounce};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  border-radius: 50%;
  background: black;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary})=> (primary ? '#fff' : '#01BF71')};
`

export const DownArrow = styled(FaArrowCircleDown)`
  width: 50px;
  height: 50px;
  margin-top: -50px;
  color: white;
  animation-name: ${bounce};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  border-radius: 50%;
  background: black;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary})=> (primary ? '#fff' : '#01BF71')};
`
export const ArrowElement = styled(Link)`
  z-index:2;
  margin-top: -30px;
  height: auto;
  text-align: center;
  white-space: nowrap;
  color: ${({dark}) => (dark ? '#fff' : '#010606')};
  cursor: pointer;
  position: sticky;
  bottom: 40px;
  display:${({hide}) => (hide ? 'none' :  'block')};
  @media (max-width: 768px) {
  text-align: end;
  margin-right: 30px;
  }
`

