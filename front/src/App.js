import './App.css';
import logo from './logo.svg';

import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" width="100" />
        <h1>API Test</h1>
      </header>
      <Products />
    </div>
  );
}

export default App;
