import './App.css'
import { Routes, Route } from 'react-router-dom'
import Admin from './assets/Components/Admin'

function App() {
  

  return (
  <>
  <Routes>
    <Route path='/admin' element={<Admin />}>      
    </Route>
  </Routes>
  </>
  )
}

export default App
