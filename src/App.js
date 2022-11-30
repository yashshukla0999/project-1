
import './App.css';
import Navbar from './components/Navbar';
import PropertyBox from './components/PropertyBox';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <div className="App">
      <Navbar />

      <SearchBox />

      <PropertyBox />
    </div>
  );
}

export default App;
