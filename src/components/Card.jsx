import '../assets/styles/components/_Card.scss'
import close from '../assets/img/close.svg';
import unlike from '../assets/img/heart.svg';
import like from '../assets/img/heart_filled.svg';

const Card = (props) => {
    
    return(
        <div className='cardContainer'>
        <div className='card-actions'>
            <div className='action-fav'><img className='icon-fav' src={unlike} alt="favorite button" /></div>
            <div className='action-close' onClick={props.onClose}><img className='icon-close' src={close} alt="close button" /></div>
        </div>
        <div className='card-image-container' onClick={props.onClick}>
        <div className='card-image' style={{backgroundImage: `url(${props.image})`}}></div>
        </div>

</div>

    )
}

export default Card;