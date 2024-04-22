import '../assets/styles/components/_PopUpEpisode.scss';
import close from '../assets/img/close.svg'
import episodeDescriptions from '../extra/data';

const PopUpEpisode = ({episode, closePopup}) => {

    const description = episodeDescriptions[episode.episode]
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
                    

                </div>

            </div>

        </div>
    )
}

export default PopUpEpisode;