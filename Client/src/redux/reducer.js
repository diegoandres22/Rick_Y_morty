import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './action-types'

const initialState = {
    miFavorites: [],
    allCharacters: []

}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_FAV:
            return {
                ...state,
                miFavorites: [ ...state.allCharacters, action.payload ],
                allCharacters: [ ...state.allCharacters, action.payload]
            }

        case REMOVE_FAV:
            return {
                ...state,
                miFavorites: state.miFavorites.filter(fav => fav.id !== action.payload)
            }

        case FILTER:
            const allCharactersFiltered = state.allCharacters.filter(character => character.gender === action.payload)
            return {
                ...state,
                miFavorites: action.payload === "allCharacters" ? [...state.allCharacters] : allCharactersFiltered
                
            }

        case ORDER:
            const allCharactersCopy = [...state.allCharacters]
            return {
                ...state,
                miFavorites: action.payload === "A" ? allCharactersCopy.sort((a, b) => a.id - b.id) : allCharactersCopy.sort((a,b) => b.id - a.id) 
                
            }
        

        default:
            return {
                ...state
            }
    }
}
export default reducer;
