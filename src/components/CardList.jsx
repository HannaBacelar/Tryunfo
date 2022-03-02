import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { salvalista } = this.props;
    return (
      <div>
        {
          salvalista.map((cartao) => (<Card
            key={ cartao.name }
            cardName={ cartao.name }
            cardDescription={ cartao.description }
            cardAttr1={ cartao.attr1 }
            cardAttr2={ cartao.attr2 }
            cardAttr3={ cartao.attr3 }
            cardImage={ cartao.image }
            cardRare={ cartao.rare }
            cardTrunfo={ cartao.trunfo }
          />
          ))
        }
      </div>
    );
  }
}

CardList.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
}.isRequired;

export default CardList;
