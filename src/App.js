import React from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/form';
import TodoContainer from './components/TodoContainer/container';



class App extends React.Component {

  state = {
    todos: []
  }

  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  delete = (e) => {
    
    var newArr = this.state.todos.filter((emp, index) => {
      return index !== e;
    });

    this.setState({
      todos: newArr,
    });
  };


  render = () => {

    return (
      <div>

        <Header />
        <Form addTodo={this.addTodo} />
        <TodoContainer todos={this.state.todos} delete={this.delete} />


      </div>
    );
  }
}

export default App;
