import React, { Component } from 'react';
import { connect } from 'react-redux';
import { enterTask, deleteTask, editTask } from '../actions';



class TaskBar extends Component {
    state = { term: '',editstate:false,currentid:'' }
    setTerm(event) {
        this.setState({ term: event.target.value })
      }

    submitTerm = (event) => {
       
        if(!this.state.editstate){
            event.preventDefault();
        if (this.state.term !== '') {
            this.props.enterTask(this.state.term);
            this.setState({ term: '' })
        }}
        else{
            
            event.preventDefault();
            if (this.state.term !== '') {
                this.props.editTask(this.state.currentid,this.state.term);
                this.setState({ term: '' })
            }
        }
    }
    deleteTerm(id) {
        this.props.deleteTask(id);
    }

    editTerm(id) {
        
        this.setState({ term: this.props.tasks[id],editstate:true ,currentid:id });
    }

    renderList() {
        return (
            this.props.tasks.map((task, id) => {
                return (
                    <div key={id}>
                        {task}
                        <button onClick={() => this.deleteTerm(id)}>Delete </button>
                        <button onClick={() => this.editTerm(id)}>edit</button>
                    </div>
                );
            }));
    }

    submitUpdatedData=()=>{
        
       }

    render() {
        return (

            <div>TaskBar
                <form onSubmit={this.submitTerm}>
                    <div className="ui container">
                        <input type="text" value={this.state.term} onChange={(event) => this.setTerm(event)} />
                    </div>
                      {!this.state.editstate&&<button type="submit">add task</button>}
                      {this.state.editstate&&<button type="submit" >Save</button>}
                </form>
                <div>{this.renderList()}</div>
            </div>);

    }
}

const mapStateToProps = (state) => {
    return { tasks: state.taskList }
};
export default connect(mapStateToProps, { enterTask, deleteTask, editTask })(TaskBar);