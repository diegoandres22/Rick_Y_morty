import './Detail.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = 'b3cab504cdec.7520ec6a455b1dc1a36a';

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
            .then(response => response.data)
            .then((data) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            });
        return setCharacter({});
    }, [id]);

    return (
        <div className='contenepadre'>
            <div >
                <img className="imgdetail" src={character?.image} alt={character?.name} />
            </div>
            <div className="info">
                <h2>Nombre: {character?.name}</h2>
                <h2>Estado: {character?.status}</h2>
                <h2>Especie: {character?.species}</h2>
                <h2>Genero: {character?.gender}</h2>
                <h2>Nombre de origen: {character?.origin?.name}</h2>
            </div>
        </div>
    )
}
export default Detail;