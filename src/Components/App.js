

import Navbar from './Navbar';
import {HashRouter,Routes,Route} from 'react-router-dom';
import Home from './Homepage';
import About from './About';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Projects' element={<Projects/>}/>
        </Routes>
      </HashRouter>
      
    </div>
  );
}

export default App;
