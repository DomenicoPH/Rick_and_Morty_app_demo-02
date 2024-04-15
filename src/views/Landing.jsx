import Button from "../components/Button";
import '../assets/styles/views/_Landing.scss'
import { useNavigate } from 'react-router-dom'

const logo = 'https://res.cloudinary.com/dhaiensb8/image/upload/v1712428822/rick_and_morty/rmlogo_dxntuf.png'

const Landing = () => {
    
    const navigate = useNavigate()
    const goHome = () => {
        navigate('/home')
    };

    return(
        <div className="Landing-container">

            <div className="header">
                {/* just spacing */}
            </div>

            <div className="center">
                <img className="image-small" src={logo} alt="Rick & Morty" />
                <Button type='type-1' text={'Enter'} onClick={goHome} />
            </div>

            <div className="footer">
                <p className="footer-text">This is an app created by Gnomono</p>
            </div>

        </div>
    )
}

export default Landing;