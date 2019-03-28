import React, { Component, Suspense } from 'react';
import Page1 from './Components/Page1';
import logo from './logo.svg';
import './App.css';

const AsyncPage2 = React.lazy(() => import("./Components/Page2"));
const AsyncPage3 = React.lazy(() => import("./Components/Page3"));
class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page 1',
    }
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  }

  render() {
    let page = null;

    switch (this.state.route) {
      case 'page 1':
        page = <Page1 onRouteChange={this.onRouteChange} />;
        break;
      case 'page 2':
        page =
          <Suspense fallback={<div className='Loading'><h1>Loading...</h1></div>}>
            <AsyncPage2 onRouteChange={this.onRouteChange} />
          </Suspense>;
        break;
      case 'page 3':
        page =
          <Suspense fallback={<div className='Loading'><h1>Loading...</h1></div>}>
            <AsyncPage3 onRouteChange={this.onRouteChange} />
          </Suspense>;
        break;
      default:
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {this.state.route}</h1>
        </header>
        {page}
      </div>
    );
  }
}


export default App;
