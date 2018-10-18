import styled from 'styled-components'

const color = "#3d86ff"

export const Card = styled.article`
  font-family: sans-serif;
  background: ${color};
  color: #fff;
  padding-bottom: 40px;
  padding-top: 58px;
  text-align: center;
`

export const Name =  styled.h1`
  font-size: 28px;
  margin: 0;
  text-transform: uppercase;
`

export const Price = styled.h2``

export const Description = styled.p``

export const Button = styled.a`
  background: #fff;
  border: 1px solid ${color};
  border-radius: 4px;
  box-sizing: border-box;
  color: ${color};
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
	background: ${color};
	color: #fff;
	border: 1px solid #fff;
      }
    `
    :`
      color: #838383;
      background: #ccc;
    `}

`
