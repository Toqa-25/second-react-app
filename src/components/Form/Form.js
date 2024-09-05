import React from 'react'
import "./Form.css"

// constructor(){
//     super()
//     this.state = {
//         tasks:[],
//         lastTask :"",
//     }
    
// }
//    const changeFun = (e) =>{
//         console.log (e.target.value)
//         this.setState({
//             lastTask : e.target.value
//         })
//     }
//     const submitFun = (e) => {
//         e.preventDefault()
//         this.setState({tasks : [...this.state.tasks ,  this.state.lastTask ]})
//         e.target.elements[0].value=""
//         console.log(e.target.elements[0])
//      }
export class Form extends React.Component{
   
    render(){
        //  console.log("Form" , this.props)
        return (
            <form className="form" onSubmit={this.props.addNewTask}>
            <input type="text" placeholder="Enter Your Task" className="input-item" onChange={this.props.writeNewTask} />
            <input type="submit" className="submit-btn" />
            </form>
        )
    
}
}