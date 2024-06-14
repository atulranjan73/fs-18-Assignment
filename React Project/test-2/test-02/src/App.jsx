import { Routes , Route } from 'react-router-dom'
import './App.css'
import Sidebar from './Sidebar'
import About from './About'
import Navbar from './Navbar'
import Certificate from './Certificate'
import Project from './Project'
import More from './More'
import Contact from './Contact'

function App() {

  return (
    <>
    <Sidebar/>
     <Routes>
        <Route path='/' element={<About/>}></Route>
        <Route path='/certificates' element={<Certificate/>}></Route>
        <Route path='/projects' element={<Project/>}></Route>
        <Route path='/more' element={<More/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
     </Routes>
    </>
  )
}

export default App
