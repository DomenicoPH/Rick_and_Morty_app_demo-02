import '../assets/styles/components/_PopUpEpisode.scss';
import close from '../assets/img/close.svg'
import episodeDescriptions from '../extra/data';
import { useSelector } from 'react-redux';
import Card from '../components/Card';

const PopUpEpisode = ({episode, closePopup}) => {

    const description = episodeDescriptions[episode.episode];
    const allCharacters = useSelector(state => state.allCharacters);

    const charactersInEpisode = episode.characters.map((charUrl) => {
        const characterId = charUrl.split('/').pop();
        return allCharacters.find((char) => char.id === parseInt(characterId));
    })

    return(
        <div className='popup-ep-container'>

            <div className='popup-ep-content'>

                <div className='popup-ep-control'>

                    <h2 className='detail-ep-code'>{episode.episode} - {episode.name}</h2>
                    <div className='popup-ep-close' onClick={closePopup}><img src={close} alt="close button" /></div>

                </div>

                <div className='popup-content-info'>

                    <h2 className='detail-ep-name'>{episode.name}</h2>

                    <div className='detail-ep-databox'>

                        <h2 className='detail-ep-data'>Season: {episode.episode.slice(2,3)} Episode: {episode.episode.slice(4,6)}</h2>
                        <h2 className='detail-ep-description'>{description}</h2>
                        <h2 className='detail-ep-data'>Air date: {episode.air_date}</h2>

                    </div>

                    <h2 className='detail-ep-characters-title'>Characters in this episode:</h2>
                    
                    <div className='detail-ep-characters'>
                        
                        {charactersInEpisode.map((character) => (
                            <Card
                                key={character.id} 
                                image={character.image}
                            />
                        ))}
                        
                    </div>
                    

                </div>

            </div>

        </div>
    )
}

export default PopUpEpisode;