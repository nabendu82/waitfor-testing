import './App.css';
import AsyncTest from './components/AsyncTest';
import MoreAsync from './components/MoreAsync';

function App() {
  return (
    <div className="App">
      <h1>waitFor Testing</h1>
      <AsyncTest name="nabendu" />
      <MoreAsync name="nabendu" />
      <MoreAsync name="bob" />
    </div>
  );
}

export default App;
