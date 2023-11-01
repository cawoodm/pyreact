import { Component } from 'react';

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
    //fetch('https://5000-cawoodm-pyreact-oft7hvkp559.ws-eu105.gitpod.io/shopping-list')
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
        <h2>ToDos v0.0.5</h2>
        <ul>
          {items.map(item => <li key={item}>{item}</li>)}
        </ul>
      </>
    )
  }
}

export default ToDos