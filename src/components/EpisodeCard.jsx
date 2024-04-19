import '../assets/styles/components/_EpisodeCard.scss';

const EpisodeCard = (props) => {
    return(
        <div className='episode-card-container'>
            <p className='episode-name'>{props.name}</p>
            <p className='episode-code'>{props.code}</p>
        </div>
    )
}

export default EpisodeCard;