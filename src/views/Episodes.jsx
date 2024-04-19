import '../assets/styles/views/_Episodes.scss'
import EpisodeControl from '../components/EpisodeControl';
import EpisodeCards from '../components/EpisodeCards';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMyEpisodes } from '../redux/actions';

const Episodes = () => {

    const dispatch = useDispatch();
    const allEpisodes = useSelector(state => state.allEpisodes);

    useEffect(() => {
        dispatch(setMyEpisodes(allEpisodes))
    },[dispatch, allEpisodes])

    return(
        <div className='episode-container'>
            <EpisodeControl />
            <div className='episodesGallery'>
                <EpisodeCards />
            </div>
        </div>
    )
}

export default Episodes;