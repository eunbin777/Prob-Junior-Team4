import './App.css';
import {BrowserRouter as Router, Routes} from 'react-router-dom'
import TDcontent from './TDcontent';
import Navbar from './Navbar';
import SelectDropBox from './SelectDropBox';
import SortDropBox from './SortDropBox';

function App() {
  return (
    <div className="App">
      <Navbar />

      <section className='travelDestination01'>
        <div className='des-con conSmall'>
          <h1>여행지</h1>
          <SelectDropBox />
          
          <SortDropBox />
          <TDcontent />
          <TDcontent />
          <TDcontent />
          <TDcontent />
        </div>
      </section>
    </div>
  );
}

export default App;
