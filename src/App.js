
import './App.css';
import picher from './shopping.jpg';
import image from './man.jpg'
import { GroseryList } from './GroseryList';

function App() {
  return (
    <div className='app'>
      <div className="container">
      <img src = { picher } alt='food' width= '200px'/> 
      </div>
      <div className="container">
      <h1> Grosery List</h1>
      </div>
      < GroseryList />
      <div className="container">
      <img src = { image } alt='men' width='200px'/>
      </div>
    </div>
  );
}

export default App;
