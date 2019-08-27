import React from 'react';
import './App.css';
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import Personal from './components/Personal'

class App extends React.Component {
  state = {
    phase: true
  }

  flip = () => { this.setState({phase: !this.state.phase }) }

  render() {
    return (
      <div className="App">
        <Header flip={this.flip} phase={this.state.phase}/>
        <div className="content">
          {this.state.phase ? <Portfolio/> : <Personal/>}
        </div>
      </div>
    );
  }
}

export default App;
