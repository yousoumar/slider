import './App.css';
import Slider from '../Slider/Slider';
import data from '../../data/data';

function App() {
  return (
    <div className="app">
      <Slider data = {data}/>
    </div>
  );
}

export default App;
