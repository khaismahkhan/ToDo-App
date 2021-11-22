import React from 'react';
import Todo from './../Todo/Todo';


var TodosContainer = (props) => {
    // console.log(props)
    return (
        <div>

            {props.todos.map((todo, index) =>
                <Todo key={todo.description} idElement={index} todo={todo} delete={props.delete} />
            )}

        </div>
    )
}

export default TodosContainer;
