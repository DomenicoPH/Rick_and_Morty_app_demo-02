import '../assets/styles/components/_Navbar.scss';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {

    const logo = 'https://res.cloudinary.com/dhaiensb8/image/upload/v1712428818/rick_and_morty/rym_r4arzo.svg'

    const navigate = useNavigate()
    const navigateTo = (route) => {
        switch(route){
            case 'landing':
                navigate('/');
                return;
            case 'characters':
                navigate('/characters');
                return;
            case 'episodes':
                navigate('/episodes');
                return;
            case 'locations':
                navigate('/locations');
                return;
            case 'about':
                navigate('about');
                return;
            case 'home':
                navigate('/home');
                return;
            default:
                return
        }
    }

    return (
        <div className="Navbar-container">

            <div className="left">

                <img 
                    className='logo' 
                    src={logo} 
                    alt="Rick and Morty logo" 
                    onClick={() => navigateTo('landing')}
                />

            </div>

            <div className="center">

            </div>

            <div className="right">
                
                <Button 
                    type='type-nav'
                    text='Characters'
                    onClick={() => navigateTo('characters')}
                />

                <Button 
                    type='type-nav'
                    text='Episodes'
                    onClick={() => navigateTo('episodes')}
                />

                <Button 
                    type='type-nav'
                    text='Locations'
                    onClick={() => navigateTo('locations')}
                />

                <Button 
                    type='type-nav'
                    text='About'
                    onClick={() => navigateTo('about')}
                />

                <Button 
                    type='type-nav'
                    text='Home'
                    onClick={() => navigateTo('home')}
                />

            </div>

        </div>
    )
}

export default Navbar;