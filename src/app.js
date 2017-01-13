import Inferno from 'inferno';
import Component from 'inferno-component';
import Logo from './logo';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <Logo width="80" height="80"/>
          <h2>Welcome to Inferno</h2>
        </div>
        <p className="app-intro">
          To get started, edit <code>src/app.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
