import React from 'react';

class Form extends React.Component {

    state = {
        todoInput: ""
    };

    ChangeInput = (e) => {
        var value = e.target.value;
        this.setState({
            todoInput: value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        var todoObj = {
            description: this.state.todoInput,
            completed: false
        }
        this.props.addTodo(todoObj)
        // console.log(todoObj)

    }

    render = () => {

        return (
            <div>

                <form onSubmit={this.onSubmit}>

                    <input onChange={this.ChangeInput} value={this.state.todoInput} type="text" placeholder="Todo"></input>
                    <button>Add</button>

                </form>

            </div>
        )
    }
}

export default Form;