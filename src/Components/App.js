

import Navbar from './Navbar';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Homepage';
import About from './About';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Projects' elements={<Projects/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
