import './App.css'
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from '../Components/LandingPage/Landing.jsx'
import AuthPage from '../Components/AuthPage.jsx'
import Admin from '../Components/AdminPage/Admin.jsx'
import User from '../Components/UserPage/User.jsx'
import SignUp from '../Components/SignUp.jsx'
import SignIn from '../Components/SignIn.jsx'
function App() {
   return (
      <div>
         <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/auth' element={<AuthPage/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/user' element={<User/>}/>
         </Routes>
      </div>
   )
}

export default App
