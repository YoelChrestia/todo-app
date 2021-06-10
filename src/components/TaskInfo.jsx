import React from 'react';

const TaskInfo = ({night, task, clearCompleted}) => {

    const taskInfoTheme = {
        TaskInfo: "taskcount__light"
    }

    let count = 0;

    task.forEach(taskobj => {
        if(taskobj.done === false){
         count++;
        }
    })

    if(night){
        taskInfoTheme.TaskInfo = "taskcount__dark"
    } else {
        taskInfoTheme.TaskInfo = "taskcount__light"
    }

    return(
        <div className={taskInfoTheme.TaskInfo}>
            <p className="items">{count} items left</p>
            <p onClick={clearCompleted} className="clear">Clear Completed</p>
        </div> 
    )
}


export default TaskInfo;