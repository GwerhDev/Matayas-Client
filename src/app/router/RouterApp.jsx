import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { Footer } from '../components/Footer/Footer';
import { Navigator } from '../components/Navigator/Navigator';
import Store from '../pages/Store';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Auth from '../pages/Auth';
import Profile from '../pages/Profile';
import Favorites from '../pages/Favorites';
import Dashboard from '../pages/admin/Dashboard';
import Product from '../pages/Product';
import ProductsCreate from '../pages/admin/ProductsCreate';
import UsersManagement from '../pages/admin/UsersManagement';
import ProductsManagement from '../pages/admin/ProductsManagement';
import Search from '../pages/Search';
import ProductsUpdate from '../pages/admin/ProductsUpdate';
import GalleryManagement from '../pages/admin/GalleryManagement';
import GalleryCreate from '../pages/admin/GalleryCreate';
import GalleryUpdate from '../pages/admin/GalleryUpdate';
import Shop from '../pages/Shop';
import MailVerification from '../pages/MailVerification';
import PendingMailVerification from '../pages/PendingMailVerification';

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
          <Route path='/mail-verification/auth' element={<MailVerification />} />
          <Route path='/mail-verification/pending' element={<PendingMailVerification />} />
          <Route path='/admin/users/management' element={<UsersManagement />} />
          <Route path='/admin/gallery/management' element={<GalleryManagement />} />
          <Route path='/admin/gallery/management/create' element={<GalleryCreate />} />
          <Route path='/admin/gallery/management/update/:id' element={<GalleryUpdate />} />
          <Route path='/admin/products/management' element={<ProductsManagement />} />
          <Route path='/admin/products/management/create' element={<ProductsCreate />} />
          <Route path='/admin/products/management/update/:id' element={<ProductsUpdate />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/store' element={<Store />} />
          <Route path='/login' element={<Login />} />
          <Route path='/search' element={<Search />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default RouterApp;
