import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Catalog from './Catalog';
function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Catalog/>} >
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  
  );
}

export default App;
