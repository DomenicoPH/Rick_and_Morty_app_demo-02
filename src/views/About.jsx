import '../assets/styles/views/_About.scss'
import { Link } from 'react-router-dom'

const gnomono = 'https://res.cloudinary.com/dhaiensb8/image/upload/v1712428812/rick_and_morty/greenlogo_v32zbe.png'

const About = () => {
    return(
        <div className='about-container'>
            <div className='about-content'>
                <h1>What about this?</h1>
                <img className='about-gnomono-logo' src={gnomono} alt="Gnomono" />
                <h2 className='about-h2'>Domenico Pagano (Gnomono)</h2>
        
                <hr className='about-separator' />
        
                <p className='about-text'>This app is a practical exercise in full-stack development.</p> 
                <p className='about-text'>Technologies used:</p>
                <ul className='about-ul'>
                    <li className='about-li'>HTML</li>
                    <li className='about-li'>CSS</li>
                    <li className='about-li'>SASS</li>
                    <li className='about-li'>JavaScript</li>
                    <li className='about-li'>React</li>
                    <li className='about-li'>Redux</li>
                </ul>

                <hr className='about-separator' />

                <Link className='about-link' to='https://rickandmortyapi.com/' target='_blank'>
                    <p className='about-text'>rickandmortyapi.com</p>
                </Link>
            </div>
        </div>
    )
}

export default About;