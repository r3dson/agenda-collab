import styled from 'styled-components'

const Button = styled.a`
  background: var(--color-zero);
  border: 1px solid var(color-first);
  border-radius: var(--radius);
  box-sizing: border-box;
  color: var(--color-first);
  cursor: pointer;
  display: inline-block;
  height: 35px;
  line-height: 35px;
  text-align: center;
  text-transform: uppercase;
  transition: all 200ms linear;
  width:120px;

  ${props => 
    props.primary
    ?`
      &:hover {
	background: var(--color-first);
	color: var(--color-zero);
	border: 1px solid var(--color-zero);
      }
    `
    :`
      color: #838383;
      background: #ccc;
    `}
`
export default Button