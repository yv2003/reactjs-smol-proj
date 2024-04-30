import './App.css';
import Accordian from './components/accordian/Accordian';
import ImageSlider from './components/imageslider/ImageSlider';

function App() {
  return (
    <div className="App">
      <Accordian />
      <ImageSlider url={'https://picsum.photos/v2/list'} page={1} limit={'10'} />
    </div>
  );
}

export default App;
