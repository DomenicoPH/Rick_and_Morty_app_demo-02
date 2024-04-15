import './_Message01.scss'
import Button from '../components/Button'

const image = 'https://res.cloudinary.com/dhaiensb8/image/upload/v1712534626/rick_and_morty/rym04_rm1flt.jpg'

const Message01 = () => {

    return(
        <div className='message01container'>

            <img className='m01image' src={image} alt="Rick and Morty" />

            <div className='m01textContainer'>

                <p className='m01mainText'>You have not summoned any characters. You can do this in the following ways:</p>

                <div className='instructionBox'>
                    <Button type='type-3' text='All' />
                    <p className='m01text'>Summon ALL Rick & Morty characters.</p>
                </div>

                <div className='instructionBox'>
                    <Button type='type-3' text='Random' />
                    <p className='m01text'>Summon a RANDOM character.</p>
                </div>

                <div className='instructionBox'>
                    <Button type='type-3' text='Clear' />
                    <p className='m01text'>Reset the board.</p>
                </div>

                <div className='instructionBox'>
                    <Button type='type-3' text='Search' />
                    <p className='m01text'>Search character by ID</p>
                </div>

            </div>
        </div>
    )
}

export default Message01;