import React from 'react';

var Todo = (props) => {
    return (
        <div>

            <h3>
                {props.todo.description} <button> Active</button> <button onClick={() => {
                    
                    props.delete(props.idElement)
                }
                }>Delete</button>
            </h3>

        </div>
    )
}

export default Todo;
