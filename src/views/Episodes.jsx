import '../assets/styles/views/_Episodes.scss'
import EpisodeControl from '../components/EpisodeControl';
import EpisodeCards from '../components/EpisodeCards';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMyEpisodes } from '../redux/actions';

const Episodes = () => {

    const dispatch = useDispatch();
    const allEpisodes = useSelector(state => state.allEpisodes);

    useEffect(() => {
        dispatch(setMyEpisodes(allEpisodes))
    },[dispatch, allEpisodes])

    const [selectedEpisode, setSelectedEpisode] = useState(null)
    const [popUpOpen, setPopUpOpen] = useState(false);

    const handleEpisodeClick = (episode) => {
        setSelectedEpisode(episode);
        setPopUpOpen(true);
    }

    const handleClosePopup = () => {
        setSelectedEpisode(null);
        setPopUpOpen(false);
    }

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