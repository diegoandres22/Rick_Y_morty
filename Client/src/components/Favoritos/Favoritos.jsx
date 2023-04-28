import './Favoritos.css'
import Card from "../Cards/Card/Card"
import { useState } from "react" 
import { connect, useDispatch } from "react-redux"
import { filterCards, orderCards } from "../../redux/action"


const Favoritos = ({ miFavorites }) => {

    const dispatch = useDispatch()
    const [aux, setAux] = useState(false)

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value)) 
        setAux(true)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div className='supercontene'>
             <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
                <option value="allCharacters">All Characters</option>
            </select>

            <h3>Mis personajes favoritos</h3>

            <div className="contene">
                {miFavorites?.map(favo => {
                    return (

                        < Card
                            key={favo.id}
                            id={favo.id}
                            name={favo.name}
                            image={favo.image}
                        />

                    )
                })
                }</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        miFavorites: state.miFavorites
    }
}


export default connect(
    mapStateToProps,
    null
)(Favoritos);