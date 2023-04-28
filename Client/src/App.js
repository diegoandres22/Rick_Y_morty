import './App.css';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards.jsx';
import axios from 'axios';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import Favoritos from './components/Favoritos/Favoritos'
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {

   const location = useLocation();
   const navigate = useNavigate();

   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;

         setAccess(access);
         access && navigate('/home');

      } catch (error) {
         console.log(error.message);
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

   const onSearch = async (id) => {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
      } catch (error) {
         alert('no hay personajes con este ID')
      }
   };





   const onClose = (id) => {
      const chafil = characters.filter((character) =>
         character.id !== id)
      setCharacters(chafil);
   }

   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess} />
         }
         <Routes>

            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={< Detail />} />
            <Route path='/favoritos' element={<Favoritos />} />
         </Routes>
         <Footer />
      </div>
   );
}


export default App;
