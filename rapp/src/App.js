import './App.css';
import NavBar from './components/NavBar';
import MidleContent from './components/MidleContent';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className='container'>

      <div class="row">
        <div class="col">


        </div>
        <div class="col-8">
          
          <MidleContent />

        </div>
        <div class="col">
        </div>
      </div>

      </div>
    </div>
  );
}

export default App;
