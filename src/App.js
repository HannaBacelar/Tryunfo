import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';

const INITIAL_STATE = {
  name: '',
  description: '',
  attr1: 0,
  attr2: 0,
  attr3: 0,
  image: '',
  rare: 'normal',
  trunfo: false,
  botao: true,
  salvalista: [],
  hasTrunfo: false,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  eventoDeMudancas = (event) => {
    const { name, type, value, checked } = event.target;

    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    }, this.validaBotao);
  }

validaBotao = () => {
  const {
    name,
    description,
    attr1,
    attr2,
    attr3,
    image,
  } = this.state;
  const number1 = 210;
  const number2 = 90;
  const soma = parseInt(attr1, 10) + parseInt(attr2, 10) + parseInt(attr3, 10);

  if (
    name !== ''
   && image !== ''
   && description !== ''
   && parseInt(attr1, 10) <= number2
   && parseInt(attr2, 10) <= number2
   && parseInt(attr3, 10) <= number2
   && parseInt(attr1, 10) >= 0
   && parseInt(attr2, 10) >= 0
   && parseInt(attr3, 10) >= 0
   && soma <= number1
  ) {
    this.setState({ botao: false });
  } else {
    this.setState({ botao: true });
  }
}

   salvaBotao = (event) => {
     event.preventDefault();
     const {
       name,
       description,
       attr1,
       attr2,
       attr3,
       image,
       rare,
       trunfo,
       botao } = this.state;

     const novoCartão = {
       name,
       description,
       attr1,
       attr2,
       attr3,
       image,
       rare,
       trunfo,
       botao,
     };

     this.setState((stateInittial) => ({
       salvalista: [...stateInittial.salvalista, novoCartão],
       hasTrunfo: [...stateInittial.salvalista, novoCartão]
         .some((element) => element.trunfo),
       name: '',
       description: '',
       attr1: 0,
       attr2: 0,
       attr3: 0,
       image: '',
       trunfo: false,
       rare: 'normal',

     }));
   }

   render() {
     const {
       name,
       description,
       attr1,
       attr2,
       attr3,
       image,
       rare,
       trunfo,
       botao,
       hasTrunfo,
       salvalista,
     } = this.state;
     return (
       <>
         <Form
           cardName={ name }
           cardDescription={ description }
           cardAttr1={ attr1 }
           cardAttr2={ attr2 }
           cardAttr3={ attr3 }
           cardImage={ image }
           cardRare={ rare }
           cardTrunfo={ trunfo }
           onInputChange={ this.eventoDeMudancas }
           isSaveButtonDisabled={ botao }
           onSaveButtonClick={ this.salvaBotao }
           hasTrunfo={ hasTrunfo }

         />
         <Card
           cardName={ name }
           cardDescription={ description }
           cardAttr1={ attr1 }
           cardAttr2={ attr2 }
           cardAttr3={ attr3 }
           cardImage={ image }
           cardRare={ rare }
           cardTrunfo={ trunfo }
         />
         <CardList salvalista={ salvalista } />

       </>
     );
   }
}
export default App;
