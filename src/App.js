import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import MoreProduct from './Pages/MoreProduct';
import Cart from './Pages/Cart';

function App() {
  return (
    <>
        <BrowserRouter>
              <NavBar/> 
              <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='/moreProduct/:id' element={<MoreProduct/>}/>
                    <Route path='/cart' element={<Cart/>}/>
              </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
