import '../assets/styles/views/_Characters.scss'
import CharacterControl from '../components/CharacterControl';
import Message01 from '../messages/Message01';
import Cards from '../components/Cards';
import PopUpDetail from '../components/PopUpDetail';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Characters = () => {

    const myCharacters = useSelector(state => state.myCharacters)
    
    const [selectedCharacter, setSelectedCharacter] = useState(null)
    const [popUpOpen, setPopUpOpen] = useState(false);
    
    const handleCharacterClick = (character) => {
        setSelectedCharacter(character);
        setPopUpOpen(true);
    }

    const handleClosePopup = () => {
        setSelectedCharacter(null);
        setPopUpOpen(false);
    }

    return(
        <div className='charactersContainer'>

            <CharacterControl />

            <div className='characterGallery'>
                {myCharacters.length === 0 && <Message01 />}
                <Cards onCharacterClick={handleCharacterClick}/>    
            </div>

            {popUpOpen && selectedCharacter && (
                <PopUpDetail character={selectedCharacter} closePopup={handleClosePopup}/>
            )}

        </div>
    )
}

export default Characters;