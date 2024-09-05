import React, { Fragment } from "react"
import "../Items.css"
import "./DoneItems.css"


export class DoneItems extends React.Component{
    render(){
        let checkedTasks = [...this.props.checkedTasks]
        return (
            <Fragment>
                <h3>Done Items</h3>
                <ul className="tasks checked-tasks" >
                {checkedTasks.map((e , idx) => {
                    return <li className="task-item" key={e.taskId}>
                                {e.taskName}    
                                <div className="item-btns" id={e.taskId}>
                                    <span className="check" onClick={this.props.unCheckedTasks} ></span>
                                     <button className="delete" onClick={this.props.deletedChecked}>x</button>
                                </div>
                            </li>
                })}
                </ul>
            </Fragment>
        )
    }
}