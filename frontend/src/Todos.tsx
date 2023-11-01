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
  componentWillMount() {
    fetch('/api/shopping-list')
      .then(res => res.json())
      .then(items => {
        this.setState(() => ({
          toDos: [...items]
        }));
        console.log("Loaded ToDos...", this.state);
      })
  }
  componentDidMount() { }
  render() {
    const { toDos: items } = this.state;
    return (
      <>
        <h2>ToDos v0.0.6</h2>
        <ul>
          {items.map(item => <ToDoItem name={item}/>)}
        </ul>
      </>
    )
  }
}

export default ToDos