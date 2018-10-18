import React, { Component } from 'react';
import { Button, Card, Description, Name, Price } from './styles'

class App extends Component {
  render() {
    return (
      <Card>
	<Name>Curso React</Name>
	<Price>$25</Price>
	<Description>Lorem ipsum dolor sit amet consectetur adipiscing elit</Description>
	<Button primary>Buy</Button>
      </Card>
    );
  }
}

export default App;
