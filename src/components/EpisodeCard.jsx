import '../assets/styles/components/_EpisodeCard.scss';
import bullseye from '../assets/img/bullseye.svg'

const bg = 'https://res.cloudinary.com/dhaiensb8/image/upload/v1712428815/rick_and_morty/space_bz3grx.webp';

const EpisodeCard = (props) => {
    return(
        <div className='episode-card-container'>
            <p className='episode-name'>{props.name}</p>
            <img className='episode-bullseye' src={bullseye} alt="link to episode detail" onClick={() => props.onEpisodeClick()}/>
            <p className='episode-code'>{props.code}</p>
            <div className='episode-card-bg-image'><img src={bg} alt="bg image" /></div>
            <div className='episode-card-bg-image'><img src={bg} alt="bg image" /></div>
        </div>
    )
}

export default EpisodeCard;