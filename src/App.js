
import { BrowserRouter,  Route, Routes } from 'react-router-dom';

import Sca from './Files/Sca'
import Barchart from './Files/Barchart';
import './App.css';
import Nav from './Files/Nav';


function App() {
  
 
  
  
  return (
    
    <>
    <br></br>

<BrowserRouter>
<Nav/>
<Routes>
  
  <Route path='/sca' element = {<Sca/>}/>
  <Route path='/bar' element = {<Barchart/>}/>
 


</Routes>

</BrowserRouter>
  

  
  </>
  
  );
}

export default App;
