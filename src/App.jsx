import './App.css';

import { Routes, Route } from 'react-router-dom';
import { AdminPageContextProvider } from './assets/Contexts/AdminContext';
import NavAndSid_Bar from './NavAndSid_Bar';

import Home from './assets/Components/Home';
import Admin from './assets/Components/Admin';
import Products from './assets/Components/Products';
import Categories from './assets/Components/Categories';

function App() {
  
  return (
  <>
  <NavAndSid_Bar/>
  <AdminPageContextProvider>
  <Routes>
    <Route path='/pg_admin' element={<Admin />}></Route>
    <Route path="/pg_home" element={<Home />}/>
    <Route path='/pg_products' element={<Products />}></Route>
    <Route path='/pg_categories' element={<Categories />}></Route>
  </Routes>
  </AdminPageContextProvider>
  </>
  )
}

export default App
