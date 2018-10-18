import React from 'react'

import Card from './styles'
import Name from '../../objects/Name'
import Price from '../../objects/Price'
import Description from '../../objects/Description'
import ButtonCollab from '../../Components/ButtonCollab'

const CardCollab = () => {
  return (
    <Card>
      <Name>Curso React</Name>
      <Price>$25</Price>
      <Description>Lorem ipsum dolor sit amet consectetur adipiscing elit</Description>
      <ButtonCollab primary>Buy</ButtonCollab>
    </Card>
  )
}

export default CardCollab
