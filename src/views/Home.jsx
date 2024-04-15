import '../assets/styles/views/_Home.scss';
import {useNavigate} from 'react-router-dom';
import Button from '../components/Button';

const img_1 = 'https://res.cloudinary.com/dhaiensb8/image/upload/v1712534625/rick_and_morty/rym03_zsg5oy.jpg';
const img_2 = 'https://res.cloudinary.com/dhaiensb8/image/upload/v1712536017/rick_and_morty/Capa_9_i2zckj.png';
const img_3 = 'https://res.cloudinary.com/dhaiensb8/image/upload/v1712534625/rick_and_morty/rym02_wa0vx1.webp';

const Home = () => {

    const navigate = useNavigate()
    const navigateTo = (route) => {
        switch(route){
            case 'characters':
                navigate('/characters');
                return;
            case 'episodes':
                navigate('/episodes');
                return;
            case 'locations':
                navigate('/locations');
                return;
            default:
                return
        }
    }

    return (
        <div className="Home-container">

            <div className='spacer'></div>

            <div className='welcome-box'>
                <p className='welcome'>Welcome to my Rick and Morty 'Character searching engine' app where you can explore characters, episodes and locations</p>
            </div>

            <div className='box-container'>
                
                <div className='box-1'>
                    <div className='box-content'>
                        <div className='description'>
                            <h1 className='home-option-title'>Characters</h1>
                            You can summon Rick and Morty's characters here!
                            <Button className='button' type="type-4" text="Characters" onClick={() => navigateTo('characters')} />
                        </div>
                    </div>
                    <img className='bgImage' src={img_1} alt="Broken legs Morty" />
                </div>

                <div className='box-2'>
                    <div className='box-content'>
                        <div className='description'>
                            <h1 className='home-option-title'>Episodes</h1>
                            You can check information on Rick and Morty's episodes here!
                            <Button className='button' type="type-4" text="Episodes" onClick={() => navigateTo('episodes')} />
                        </div>
                    </div>
                    <img className='bgImage' src={img_2} alt="Broken legs Morty" />
                </div>

                <div className='box-3'>
                    <div className="box-content">
                        <div className='description'>
                            <h1 className='home-option-title'>Locations</h1>
                            You can visit Rick and Morty's locations here!
                            <Button className='button' type="type-4" text="Locations" onClick={() => navigateTo('locations')} />
                        </div>
                    </div>
                    <img className='bgImage' src={img_3} alt="Broken legs Morty" />
                </div>

            </div>

        </div>
    )
}

export default Home;