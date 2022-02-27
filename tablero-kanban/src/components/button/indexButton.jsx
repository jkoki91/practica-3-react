import './styleButton.css'
import React from 'react'
import { useState, useContext } from 'react'
import CardsContext from '../context/indexContext'


// Hay que hacer que cuando no haya texto en el text area el boton verde esté deshabilitado y además con opacidad 0.7.


function Button() {

    const {cardsState, updateCardsState} = useContext(CardsContext)
    
    let [isChecked, isCheckedUpdate] = useState(false)
    let [isDisabled, isDisabledUpdate] = useState(true)
    // localStorage.setItem('arrayTasks',arrayTasks);
    
    const handle = () => {
        isCheckedUpdate(true)
        isDisabledUpdate(true)
    }

    const handleKeyPress = () => {
        isDisabledUpdate(false)
    }

    const handleSubmit = e => {
        e.preventDefault()
        let obj = {
            text: e.target.textarea.value
        }
        updateCardsState([...cardsState,obj])
        // console.log(cardsState)
        
        // localStorage.setItem('card', obj);
        isCheckedUpdate(false)
    }

    return (


        <React.Fragment>
            <button className="button" onClick={handle}>➕</button>
            {isChecked
                ? <form onSubmit={handleSubmit}>
                    <textarea onKeyUp={handleKeyPress} placeholder='Enter a note' className='text_area' type='textarea' name='textarea' ></textarea>
                    <section>
                        {isDisabled
                            ? <button disabled={true} type='submit' className='button_text_area add_button add_button-disabled'>Add</button>
                            : <button type='submit' className='button_text_area add_button'>Add</button>}
                        <button type='submit' className='button_text_area cancel_button'>Cancel</button>
                    </section>
                </form>
                : ''}
        </React.Fragment>)

}

export default Button;