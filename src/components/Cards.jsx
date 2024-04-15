import '../assets/styles/components/_Cards.scss'
import Card from './Card';
import Utils from '../Utils';
import {useSelector} from 'react-redux';

const Cards = ({onCharacterClick}) => {

    const myCharacters = useSelector(state => state.myCharacters)

    const utils = Utils()

    return(
        <div className="cardsContainer">
            {myCharacters && myCharacters.map(char => (
                <Card 
                    key={char.id}
                    id={char.id}
                    name={char.name}
                    status={char.status}
                    species={char.species}
                    type={char.type ? char.type : 'unknown'}
                    gender={char.gender}
                    origin={char.origin ? char.origin.name : 'unknown'}
                    location={char.location ? char.location.name : 'unknown'}
                    image={char.image}
                    onClose={() => utils.onClose(char.id)}
                    onClick={() => onCharacterClick(char)}
                />
            ))}
        </div>
    )
}

export default Cards;