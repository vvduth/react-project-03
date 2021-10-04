import React from "react";
import Todo from "./Todo";

const List = (props) => {
    const renderList = props.list.map((item) => <Todo title={item.title} 
                                                        completed = {item.completed}
                                                        key ={item.title}
                                                        remove = {(e) => props.remove(item.id)}
                                                        />)
    return (
        <div className="ui grid center aligned">
            {renderList}
        </div>
    )

}

export default List;