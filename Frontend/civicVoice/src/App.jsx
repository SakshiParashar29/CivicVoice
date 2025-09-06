import './App.css'
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from '../Components/LandingPage/Landing.jsx'
import AuthPage from '../Components/AuthPage.jsx'
function App() {
   return (
      <div>
         <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/auth' element={<AuthPage/>}/>
         </Routes>
      </div>
   )
}

export default App
