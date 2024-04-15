import '../assets/styles/components/_CharacterControl.scss'
import Button from './Button';
import SearchBar from './SearchBar';
import Utils from '../Utils';

const CharacterControl = () => {

    const { onRandom, handleClearAllCharacters, handleGetAllCharacters } = Utils()

    return(
        <div className='characterControl'>

                <Button type='type-3' text='All' onClick={handleGetAllCharacters} />
                <Button type='type-3' text='Clear' onClick={handleClearAllCharacters} />
                <SearchBar />
                <Button type='type-3' text='Random' onClick={onRandom}/>

        </div>
    )
}

export default CharacterControl;