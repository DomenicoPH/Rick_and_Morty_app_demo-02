import '../assets/styles/components/_EpisodeCards.scss';
import { useSelector } from 'react-redux';
import EpisodeCard from './EpisodeCard';

const EpisodeCards = () => {

    const myEpisodes = useSelector(state => state.myEpisodes);

    return(
        <div className='episode-cards-container'>
            {myEpisodes && myEpisodes.map(ep => (
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