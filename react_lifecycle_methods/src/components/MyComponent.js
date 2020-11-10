import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);

    //Usa-se constructor primariamente para duas funções -
    //passar o state ou fazer o bind dos métodos da classe.
    this.state = {
      stateNumber: 5,
    };

    //fazendo o bind - deve ser feito no construtor.
    this.handleAddNumber = this.handleAddNumber.bind(this);

    console.log('constructor...');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps...');
    // console.log(props);
    // console.log(state);
    // return { myNumber: 6 };
    return null;
  }

  componentDidMount() {
    //aqui é onde fazemos requisições a APIs pois ele é invocado logo após o componente for renderizado na tela.
    console.log('Component did mount...');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shoudComponentUpdate...');
    console.log('Actual State', this.state);
    console.log('Next State', nextState);

    return true;
  }

  componentDidUpdate() {
    console.log('ComponentDidUpdate...');
  }

  handleAddNumber() {
    console.log('setState...');
    let actualNumber = this.state.stateNumber;
    actualNumber += 1;
    this.setState({ stateNumber: actualNumber });
  }

  render() {
    console.log('render...');
    return (
      <div>
        <p>{this.props.title}</p>
        <p>{this.state.stateNumber}</p>
        {/* <button onClick={this.handleAddNumber.bind(this)}>Add Number</button> */}
        <button onClick={this.handleAddNumber}>Add Number</button>
      </div>
    );
  }
}

export default MyComponent;
