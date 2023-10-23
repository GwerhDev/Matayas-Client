import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { Footer } from '../components/Footer/Footer';
import { Navigator } from '../components/Navigator/Navigator';
import Store from '../pages/Store';
import Gallery from '../pages/Gallery';
import Location from '../pages/Location';
import Contact from '../pages/Contact';


function RouterApp() {
  return (
    <main className='main'>
      <Navigator/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/location' element={<Location />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer/>
    </main>
  )
}

export default RouterApp;
