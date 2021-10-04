import React,{useState} from "react";


const Todo = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(props.title);
    const [isCompleted, setIsCompleted] = useState(props.completed);

    const divDoubleClickHandler = () => {
        setIsEditing(true);
    };

    const inputClickHandler = (event) => {
        setIsEditing(false)
    };

    const editChangeHandler = (event) => {
        setValue(event.target.value);
    }

    const compeleteClickHandler = () => {
        setIsCompleted((prevState) => !prevState);
    }
    return (
        isEditing ? 
        <div className = "row" >
            <div className = "column seven wide">
            <div className="ui input fluid" > 
                <input
                    autoFocus = {true}
                    value = {value}
                    onChange = {editChangeHandler}    
                />
            </div>
            </div>
            <button onClick = {inputClickHandler}  className= "ui button circular icon green">
                        <i className="white check icon"></i>
            </button>
        </div>
         :
        <div className = "row" >
                <div className = "column five wide" onDoubleClick = {divDoubleClickHandler}>
                    <h2 className= {"ui header" + (isCompleted ? " green" : "white")} >{value}</h2> 
                </div>

                <div className = "column one wide" onClick={compeleteClickHandler}>
                    <button className= {"ui button circular icon" + (isCompleted ? " blue" : " green") }>
                        <i className="white check icon"></i>
                    </button>
                </div>

                <div className = "column one wide">
                    <button 
                        onClick = {props.remove}
                        className= "ui button circular icon red"
                        style = { { 
                            marginLeft: '10px'
                        }}>
                        <i className="white remove icon"></i>
                    </button>
                </div>
        </div>
        
    );
};

export default Todo ;