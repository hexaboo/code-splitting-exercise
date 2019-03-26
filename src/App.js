import React, { Component } from 'react';
import AsyncComponent from './AsyncComponent';
import Page1 from './Components/Page1';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
    }
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  }

  render() {
    let page = null;
    let name = '';

    switch (this.state.route) {
      case 'page1':
        page = <Page1 onRouteChange={this.onRouteChange} />;
        name = 'Page 1';
        break;
      case 'page2':
        let AsyncPage2 = AsyncComponent(() => import("./Components/Page2"));
        page = <AsyncPage2 onRouteChange={this.onRouteChange} />;
        name = 'Page 2';
        break;
      case 'page3':
        let AsyncPage3 = AsyncComponent(() => import("./Components/Page3"));
        page = <AsyncPage3 onRouteChange={this.onRouteChange} />;
        name = 'Page 3';
        break;
      default:
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {name}</h1>
        </header>
        {page}
      </div>
    );
  }
}

export default App;
