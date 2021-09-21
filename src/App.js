import FilterList from './components/filterList/FilterList';
import {fakeNames} from './utils/fakeNames';
import './App.css';

function App() {
  return (
    <div className="App">
      <FilterList names={fakeNames}/>
    </div>
  );
}

export default App;
