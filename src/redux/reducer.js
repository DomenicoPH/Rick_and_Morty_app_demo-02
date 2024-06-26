import {
    SET_ALL_CHARACTERS,
    SET_ALL_EPISODES,
    SET_ALL_LOCATIONS,
    SET_MY_CHARACTERS,
    CLEAR_ALL_CHARACTERS,
    GET_ALL_CHARACTERS,
    CLOSE_CHARACTER,
    SET_MY_EPISODES,
    FILTER_EPISODES_BY_SEASON,
    GET_ALL_EPISODES,
} from './actions'

const initialState = {
    //estados absolutos
    allCharacters: [],
    allEpisodes: [],
    allLocations: [],
    //estados editables
    myCharacters: [],
    myFavoriteCharacters: [],
    myEpisodes: [],
    filteredEpisodes: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        // all characters actions here...
        case SET_ALL_CHARACTERS:
            return{
                ...state,
                allCharacters: action.payload
            }
        // all episodes actions here...
        case SET_ALL_EPISODES:
            return{
                ...state,
                allEpisodes: action.payload
            }
        // all locations actions here...
        case SET_ALL_LOCATIONS:
            return{
                ...state,
                allLocations: action.payload
            }
        case SET_MY_CHARACTERS:
            return{
                ...state,
                myCharacters: [ ...state.myCharacters, action.payload ]
            }
        case CLEAR_ALL_CHARACTERS:
            return{
                ...state,
                myCharacters: []
            }
        case GET_ALL_CHARACTERS:
            return{
                ...state,
                myCharacters: [ ...state.allCharacters ]
            }
        case CLOSE_CHARACTER:
            return{
                ...state,
                myCharacters: [ ...state.myCharacters.filter((char) => char.id !== action.payload)]
            }
        case SET_MY_EPISODES:
            return{
                ...state,
                myEpisodes: action.payload
            }
        case FILTER_EPISODES_BY_SEASON:
            const season = action.payload;
            const filteredEpisodes = state.allEpisodes.filter(episode => episode.episode[2] === season)
            return{
                ...state,
                myEpisodes: filteredEpisodes,
            }
        case GET_ALL_EPISODES:
            return{
                ...state,
                myEpisodes: state.allEpisodes
            }
        default:
            return{
                ...state
            }
    }
}

export default reducer;