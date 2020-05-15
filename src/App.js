import React, { Component } from 'react';

// JSX...

// Class...
//class Greeting extends Component {
//  render() {
//    return <div>Hello {this.props.name}</div>;
//  }
//}

// ...or, function
//function Greeting(props) {
//  return <div>Hello {props.name}</div>;
//}

// ...or, Javascript

// JSX class containing Javascript...
//class Greeting extends Component {
//  render() {
//    return React.createElement(
//      "div", null,
//     "Hello ", this.props.name
//    );
//  }
//}

// ...or, JSX function containing Javascript
function Greeting(props){
  return React.createElement(
    "div", null,
    "Hello ", props.name
  );
}

// App can be a class...
//class App extends Component {
//  render() {
//    return <Greeting name="Peanut" />;
//  }
//}

//...or a function, as there is no need for state or life-cycle functions
function App() {
  return <Greeting name="Stuart" />;
}

export default App;
