import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App(props) {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
    // this.handleClick = this.handleClick.bind(this)
  }

  getItems() {
    this.setState({
      items: ['one', 'two', 'three']
    })
  }

  componentDidMount() {
    console.log('component mounted')
    console.log(this.state.items)
    this.getItems();
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('should the component update (yes)')
    console.log(this.state)
    console.log(nextState)
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('the component did update')
    console.log('previous state', prevState)
    console.log('current state', this.state)
  }

  componentWillUnmount() {
    console.log('removing from the DOM')
  }

  handleClick = (e) => {
    console.log('the button was clicked')
    this.setState({
      items: [...this.state.items, 'four']
    })
  }

  render() {
    const { items } = this.state;

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          {items.map(item => <p key={item}><button onClick={this.handleClick}>{item}</button></p>)}
      </header>
    </div>
    )
  }
}

export default App;
