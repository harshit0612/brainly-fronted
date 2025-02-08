import './App.css'
import { DashBoard } from './pages/dashboard'
import { SignIn } from './pages/signIn'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { SignUp } from './pages/signUp'
import {ShareDashBoard} from './pages/shareDashboard'

export function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/dashboard'  element={<DashBoard/>} />
        <Route path='/share/:shareLink' element={<ShareDashBoard/>}/>
      </Routes>
    </BrowserRouter>
  )
}





