import '../assets/styles/components/_EpisodeCards.scss';
import { useSelector } from 'react-redux';
import EpisodeCard from './EpisodeCard';

const EpisodeCards = ({onEpisodeClick}) => {

    const myEpisodes = useSelector(state => state.myEpisodes);

    return(
        <div className='episode-cards-container'>
            {myEpisodes && myEpisodes.map(ep => (
                <EpisodeCard 
                    key={ep.id}
                    id={ep.id}
                    name={ep.name}
                    code={ep.episode}
                    onEpisodeClick={() => onEpisodeClick(ep)}
                />
            ))}
        </div>
    )
}

export default EpisodeCards;