import '../assets/styles/components/_SearchBar.scss'
import Button from './Button'
import { useState, useRef } from 'react'
import Utils from '../Utils'

const SearchBar = () => {
    
    const [characterId, setCharacterId] = useState([])
    const inputRef = useRef(null)
    const { onSearch } = Utils() // Funciones onSearch, onRandom...


    const handleChange = (e) => {
        setCharacterId(e.target.value)
        console.log(characterId)
    };

    const handleSearch = () => {
        onSearch(characterId)
        clearInput();
        inputRef.current.focus()
    };

    const clearInput = () => {
        setCharacterId('')
    };

    const pressEnter = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault();
            handleSearch();
        }
    };
    
    return(
        <div className='sb_container'>

            <input 
                type="number"
                name="search"
                id="search"
                placeholder='Character ID here'
                ref={inputRef} // state...
                value={characterId} // state...
                onChange={handleChange}
                onKeyPress={pressEnter}
                className='sb_input' 
            />

            <Button 
                type='type-3'
                text='Search'
                onClick={handleSearch}
                className='sb_button'
            />
            
        </div>
    )
}

export default SearchBar;