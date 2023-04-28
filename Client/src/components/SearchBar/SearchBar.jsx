import './SearchBar.css'
import { useState } from "react";

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }
   const numAle = (num)=>{
    return  Math.random() * 9 * num ;
   }

   return (
      <div className='content'>
         <button className="botonsear" onClick={() => { onSearch(parseInt(numAle(23))); setId('') }}>añadir random</button>
         <input className='inputsearch ' type='search' onChange={handleChange} value={id}  placeholder='Colocar id'/>
         <button className="botonsear" onClick={() => { onSearch(id); setId('') }}>Añadir personaje</button>

      </div>
   );
}
