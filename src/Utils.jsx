import { useSelector, useDispatch } from 'react-redux'
import { setMyCharacters, clearAllCharacters, getAllCharacters, closeCharacter } from './redux/actions';

const Utils = () => {

    const dispatch = useDispatch();
    const allCharacters = useSelector(state => state.allCharacters)
    const myCharacters = useSelector(state => state.myCharacters)

// onSearch
    const onSearch = (id) => {

        if(!id){
            alert('Invalid ID');
            return;
        }

        const character = allCharacters.find(char => char.id == id)

        if(character){
            if(myCharacters.some(char => char.id === character.id)){
                alert('Character on screen')
            } else {
                dispatch(setMyCharacters(character))
            }
        } else {
            alert('Character not found')
        }

    };

// onRandom
    const onRandom = () => {

        let randomId;
        let totalCharacters = allCharacters.length;

        if(myCharacters.length === totalCharacters){
            alert('Characters limit reached')
            return
        }

        do{
            randomId = Math.floor(Math.random() * totalCharacters) + 1
        } while (myCharacters.some(char => char.id == randomId))

        onSearch(randomId)
    };

// handleClearAllCharacters
    const handleClearAllCharacters = () => {
        dispatch(clearAllCharacters())
    }

// handleGetAllCharacters
    const handleGetAllCharacters = (characters) => {
        dispatch(getAllCharacters(characters))
    }

// onClose
    const onClose = (id) => {
        dispatch(closeCharacter(id))
    }

    return {
        onSearch, 
        onRandom, 
        handleClearAllCharacters,
        handleGetAllCharacters,
        onClose,
    };

}

export default Utils;