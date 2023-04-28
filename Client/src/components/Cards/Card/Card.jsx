import './Card.css'
import { Link } from "react-router-dom";
import { addFav, removeFav } from '../../../redux/action'
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, miFavorites }) {

   const [favorito, setFavorito] = useState(false);

   const handleFavorite = () => {
      if (favorito) {
         setFavorito(false);
         removeFav(id);
      }
      else {
         setFavorito(true);
         addFav({ id, name, status, species, image })
      }
   }
   useEffect(() => {
      miFavorites.forEach((fav) => {
         if (fav.id === id) {
            setFavorito(true);
         }
      });
   }, [miFavorites]);

   return (
      <div className='targeta'>
         <div className="ver">{name}</div>
         <button className='botoncito1' onClick={handleFavorite}>{favorito ? '❤️' : '🤍'}</button>
         <Link className='conteneimg' to={`/detail/${id}`} >
            <img className='img' src={image} alt='' />
         </Link>
         <button className='botoncito2' onClick={() => onClose(id)}>X</button>
      </div>
   );
}
const mapStateToProps = (state) => {
   return {
      miFavorites: state.miFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)


