import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <labbel data-testid="name-input" htmlFor="name">
            Nome
            <input
              type="text"
              name="nome"
              id="name"
            />
          </labbel>

          <labbel data-testid="description-input" htmlFor="description">
            Descrição
            <input
              type="textarea"
              name="description"
              id="description"
            />
          </labbel>

          <labbel data-testid="attr1-input" htmlFor="attr1">
            Attr01
            <input
              type="number"
              name="attr1"
              id="attr1"
            />
          </labbel>

          <labbel data-testid="attr2-input" htmlFor="attr1">
            Attr02
            <input
              type="number"
              name="attr2"
              id="attr2"
            />
          </labbel>

          <labbel data-testid="attr3-input" htmlFor="attr3">
            Attr03
            <input
              type="number"
              name="attr2"
              id="atter2"
            />
          </labbel>

          <labbel data-testid="image-input" htmlFor="image">
            Imagem
            <input
              type="text"
              name="image"
              id="image"
            />
          </labbel>

          <labbel htmlFor="rare">
            Raridade
            <select data-testid="rare-input" name="rare" id="rare">
              <option value="normal">normal </option>
              <option value="raro">raro </option>
              <option value="muito raro">muito raro </option>
            </select>
          </labbel>

          <labbel data-testid="trunfo-input" htmlFor="trunfo">
            Super Tryeb Trunfo
            <input
              type="checkbox"
              name="trunfo"
              id="trunfo"
            />
          </labbel>

          <button data-testid="save-button" type="submit">Salvar</button>

        </form>
      </div>

    );
  }
}

export default Form;
