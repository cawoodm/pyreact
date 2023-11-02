import { Component } from 'react';
import ToDoItem from './ToDoItem';

type ToDoList = string[];

type StateType = {
  toDos: ToDoList
}

class ToDos extends Component {
  state: StateType;

  constructor(props: ToDoList) {
    super(props)
    this.state = {
      toDos: ['One'],
    }
  }
  componentDidMount() {
    // fetch('https://5000-cawoodm-pyreact-oft7hvkp559.ws-eu105.gitpod.io/api/shopping-list', { credentials: "include" })
    fetch('/api/shopping-list')
      .then(res => res.json())
      .then(items => {
        this.setState(() => ({
          toDos: [...items]
        }));
      })
  }
  render() {
    const { toDos: items } = this.state;
    return (
      <>
        <h2>ToDos</h2>
        <ul>
          {items.map(item => <ToDoItem key={item} name={item} />)}
        </ul>
      </>
    )
  }
}

export default ToDos