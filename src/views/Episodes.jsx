import '../assets/styles/views/_Episodes.scss'
import EpisodeControl from '../components/EpisodeControl';
import EpisodeCards from '../components/EpisodeCards';



const Episodes = () => {
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