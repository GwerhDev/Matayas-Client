import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { Footer } from '../components/Footer/Footer';
import { Navigator } from '../components/Navigator/Navigator';
import Store from '../pages/Store';
import Gallery from '../pages/Gallery';
import Location from '../pages/Location';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Auth from '../pages/Auth';


function RouterApp() {
  return (
    <div>
      <div className='nav-container'>
        <Navigator />
      </div>
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/store' element={<Store />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/location' element={<Location />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default RouterApp;
