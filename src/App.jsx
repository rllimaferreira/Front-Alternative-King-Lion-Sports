import './App.css'
import { Routes, Route } from 'react-router-dom'
import Admin from './assets/Components/Admin'
import { AdminPageContextProvider } from './assets/Contexts/AdminContext'

function App() {
  

  return (
  <>
  <AdminPageContextProvider>
  <Routes>
    <Route path='/admin' element={<Admin />}>      
    </Route>
  </Routes>
  </AdminPageContextProvider>
  </>
  )
}

export default App
