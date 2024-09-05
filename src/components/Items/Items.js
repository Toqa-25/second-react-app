import React from "react";
import "./Items.css"

export class Items extends React.Component {
    // const 
    render (){
        let tasks = [...this.props.tasks]
        // document.getElementById("1").innerHTML = ""
        // console.log (document.getElementById("1"))
        return (
            <ul className="tasks" >
            {tasks.map((e , idx) => {
                return <li className="task-item"  key={e.taskId}>
                            {e.taskName}    
                            <div className="item-btns" id={e.taskId}>
                                <span className="check" onClick={this.props.checked}></span>
                                <button className="delete" onClick={this.props.deleted}>x</button>
                            </div>
                        </li>
            })}
             </ul>
        )
    }
}