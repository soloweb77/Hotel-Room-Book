
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Link, Routes}from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Profilescreen from './screens/Profilescreen';
import Adminscreen from './screens/Adminscreen';
import LandingScreen from './screens/Landingscreen';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <BrowserRouter>
     <Routes> 
      
      <Route path='/home' exact Component={Homescreen}/>
      <Route path='/book/:roomid/:fromdate/:todate' element={<Bookingscreen/>}/>
      <Route path='/register' exact Component={Registerscreen}/>
      <Route path='/login' exact Component={Loginscreen}/>
      <Route path='/profile' exact Component={Profilescreen}/>
      <Route path='/admin' exact Component={Adminscreen}/>
      <Route path='/' exact Component={LandingScreen}/>


    
    </Routes>
   
    </BrowserRouter>
    </div>
  );
}

export default App;
