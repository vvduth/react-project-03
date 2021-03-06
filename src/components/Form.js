import React,{useState} from "react";
import './Form.css'

const Form = (props) => {

    const [inputValue, setInputValue] = useState('');
    const inputChangeHandler = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (inputValue.trim().length <= 0 ){
                return ;
        }
        props.addForm(inputValue);
        setInputValue('');
    }
    return (
        <form  className = "ui form" onSubmit= {onSubmitHandler}>
            <div className = "ui grid center aligned">
                <div className="row">
                    <div className="column five wide">
                        <input style = {{display: 'block',
                                         width: '100%',
                                        border:' 1px solid #ccc',
                                        font: 'inherit',
                                        lineHeight: '1.5rem',
                                        padding: '0 0.25rem' }} 
                            value = {inputValue}
                            onChange = {inputChangeHandler}
                            type = "text" 
                            placeholder="Enter something to do..."/>
                    </div>
                    <div className="column one wide">
                    <button  type = "submit" className = "ui button circular icon green" >
                        <i className= "white plus icon" ></i>
                    </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form ;