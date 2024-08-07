import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import About from './Pages/About'
import CreateTodo from './Pages/CreateTodo'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home />}/>
          <Route path='/signup' element= {<Signup />}/>
          <Route path='/login' element= {<Login />}/>
          <Route path='/dashboard' element= {<Dashboard />}/>
          <Route path='/about' element={<About />} />
          <Route path='/create' element={<CreateTodo />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  )
}

export default App
