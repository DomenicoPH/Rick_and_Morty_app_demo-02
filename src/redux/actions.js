export const SET_ALL_CHARACTERS = 'SET_ALL_CHARACTERS';
export const SET_ALL_EPISODES = 'SET_ALL_EPISODES';
export const SET_ALL_LOCATIONS = 'SET_ALL_LOCATIONS';
export const SET_MY_CHARACTERS = 'SET_MY_CHARACTERS';
export const CLEAR_ALL_CHARACTERS = 'CLEAR_ALL_CHARACTERS';
export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';
export const CLOSE_CHARACTER = 'CLOSE_CHARACTER';

export const setAllCharacters = (characters) => ({
    type: SET_ALL_CHARACTERS,
    payload: characters,
})

export const setAllEpisodes = (episodes) => ({
    type: SET_ALL_EPISODES,
    payload: episodes,
})

export const setAllLocations = (locations) => ({
    type: SET_ALL_LOCATIONS,
    payload: locations
})

export const setMyCharacters = (characters) => ({
    type: SET_MY_CHARACTERS,
    payload: characters,
})

export const clearAllCharacters = () => ({
    type: CLEAR_ALL_CHARACTERS,
})

export const getAllCharacters = () => ({
    type: GET_ALL_CHARACTERS,
})

export const closeCharacter = (id) => ({
    type: CLOSE_CHARACTER,
    payload: id,
})