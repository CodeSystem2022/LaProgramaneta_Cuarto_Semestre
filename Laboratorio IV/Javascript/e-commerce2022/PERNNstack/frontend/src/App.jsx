import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import TareasPage from './pages/TareasPage';
import TareaFromPage from './pages/TareaFromPage';



function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/register' element={<RegisterPage/>} />

      <Route path='/perfil' element={<ProfilePage/>} />
      <Route path='/tareas' element={<TareasPage/>} />
      <Route path='/tareas/crear' element={<TareaFromPage/>} />
      <Route path='/tareas/editar/:id' element={<TareaFromPage/>} />

    


    </Routes>
    )
}

export default App