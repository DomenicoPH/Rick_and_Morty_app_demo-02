import '../assets/styles/components/_EpisodeCards.scss';
import { useSelector } from 'react-redux';
import EpisodeCard from './EpisodeCard';

const EpisodeCards = () => {

    const allEpisodes = useSelector(state => state.allEpisodes);

    return(
        <div className='episode-cards-container'>
            {allEpisodes && allEpisodes.map(ep => (
                <EpisodeCard 
                    key={ep.id}
                    id={ep.id}
                    name={ep.name}
                    code={ep.episode}
                />
            ))}
        </div>
    )
}

export default EpisodeCards;