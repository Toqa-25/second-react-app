import React from 'react';
import './App.css';
import { Form } from './components/Form/Form';
import { Items } from './components/Items/Items';
import { DoneItems } from './components/Items/DoneItems/DoneItems';

export class App extends React.Component {
  
  constructor() {
    super()
    this.state={
      tasks:[],
      lastTask :{
        taskName:"",
        taskId: 0,
      },
      checkedTasks:[]
    }
    this.change = (e) => {
      let id = this.state.tasks.length
      this.setState({
        lastTask :{
          taskName : e.target.value,
          taskId:id
        }
      })
    }
    this.submit = (e) => {
      e.preventDefault()
      // this.state.tasks.push(this.state.lastTask)
      let  tasks=[...this.state.tasks , this.state.lastTask]
      // tasks.push(this.state.lastTask)
      this.setState({
        tasks
      })
    e.target.elements[0].value=""

    }
    this.deleted = (e) => {
      let id = Number(e.target.parentElement.id),
      //  tasks = (this.state.tasks).filter((e, idx) => id !== idx) 
       tasks = (this.state.tasks).filter((e, idx) => id !== e.taskId) 

      this.setState({
        tasks
      })
    }
    this.deletedChecked = (e) => {
      let id = Number(e.target.parentElement.id),
      //  checkedTasks = (this.state.checkedTasks).filter((e, idx) => id !== idx) 
       checkedTasks = (this.state.checkedTasks).filter((e, idx) => id !== e.taskId) 

      this.setState({
        checkedTasks
      })
    }
    this.checked = (e) => {
      let id = Number(e.target.parentElement.id),
       tasks = (this.state.tasks).filter((e, idx) => id !== e.taskId) ,
       testTask= (this.state.tasks).find((e, idx) => id === e.taskId ),
       checkedTask = (this.state.tasks).find((e, idx) => id === idx ),
       checkedTasks = [...this.state.checkedTasks , testTask]
       console.log ( id , checkedTask)
       console.log ( "testTask" , testTask)

      this.setState({
        tasks,
        checkedTasks
      })
      
      console.log ("tasks" , (this.state.tasks))
      console.log ( "checkedTasks",(this.state.checkedTasks))
    }
    this.unChecked = (e) => {
      let id = Number(e.target.parentElement.id),
      unCheckedTask = (this.state.checkedTasks).find((e, idx) => id === idx),
      unCheckedTaskTest = (this.state.checkedTasks).find((e, idx) => id === e.taskId),
      checkedTasks =(this.state.checkedTasks).filter((e, idx) => id !== e.taskId),
      tasks = [...this.state.tasks , unCheckedTaskTest ]
       console.log (checkedTasks)

      this.setState({
        tasks,
        checkedTasks
      })
      
      console.log ((this.state.tasks))
      console.log ((this.state.checkedTasks))
    }
  }
  render(){
    return (
      <div className="App">
        <h1>ToDo List</h1>
        <Form writeNewTask={this.change} addNewTask={this.submit} tasks={this.state.tasks}/> 
        <Items tasks={this.state.tasks} checked={this.checked}  deleted={this.deleted}/> 
        <DoneItems checkedTasks={this.state.checkedTasks} deletedChecked={this.deletedChecked} unCheckedTasks={this.unChecked}/>
       
      </div>
    );
  }
}
