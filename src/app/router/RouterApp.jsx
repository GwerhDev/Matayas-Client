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
import Profile from '../pages/Profile';
import Favorites from '../pages/Favorites';
import Dashboard from '../pages/admin/Dashboard';
import Product from '../pages/Product';


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
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/my-favorites' element={<Favorites />} />
          <Route path='/admin/dashboard' element={<Dashboard />} />
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
