import '../assets/styles/components/_PopUpDetail.scss'
import close from '../assets/img/close.svg'

const PopUpDetail = ({character, closePopup}) => {
    return(
        <div className='popup-container'>

            <div className='popup-content'>

                <div className='popup-control'>

                    <h2 className='detail-name'>({character.id}) {character.name}</h2>
                    <div className='popup-close' onClick={closePopup}><img src={close} alt="close button" /></div>

                </div>

                <div className='popup-content-info'>

                    <div className='popup-content-left'>
                        <img className='detail-image' src={character.image} alt={character.name} />
                    </div>

                    <div className='popup-content-right'>

                        <div className='detail-data'>
                            <p className='detail-data-label'>Status:</p><p className='detail-data-info'>{character.status ? character.status : 'unknown'}</p>
                        </div>

                        <div className='detail-data'>
                            <p className='detail-data-label'>Species:</p><p className='detail-data-info'>{character.species ? character.species : 'unknown'}</p>
                        </div>

                        <div className='detail-data'>
                            <p className='detail-data-label'>Type:</p><p className='detail-data-info'>{character.type ? character.type : 'unknown'}</p>
                        </div>

                        <div className='detail-data'>
                            <p className='detail-data-label'>Gender:</p><p className='detail-data-info'>{character.gender ? character.gender : 'unknown'}</p>
                        </div>

                        <hr className='separator' />

                        <div className='detail-data dd-special'>
                            <p className='detail-data-label'>First seen in (origin):</p><p className='detail-data-info'>{character.origin ? character.origin.name : 'unknown'}</p>
                        </div>

                        <div className='detail-data dd-special'>
                            <p className='detail-data-label'>Last known location:</p><p className='detail-data-info'>{character.location ? character.location.name : 'unknown'}</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default PopUpDetail;