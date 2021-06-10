import React from 'react';

const Task = ({night, title, done, handleChecked, handleDelete}) => {
   
    const taskTheme = {
        task: "tasklight",
        taskbutton: "tasklight__button",
        taskcount: "taskcount__light",
        donetitle: ""
    }

    if(done) {
        taskTheme.taskbutton = "buttoncheck"
        taskTheme.donetitle = "donetitle" 
    }

    if(night === true){
        taskTheme.task = "taskdark"
        taskTheme.button = "taskdark__button"
        taskTheme.taskcount = "taskcount__dark"
    } else {
        taskTheme.task = "tasklight"
        taskTheme.button = "tasklight__button"
        taskTheme.taskcount = "taskcount__light"
    }
   
    return (
        <div className="task__contain">
            <div className={taskTheme.task}>
                <button onClick={handleChecked} className={taskTheme.taskbutton}></button>
                <p className={taskTheme.donetitle}>{title}</p>
                <img onClick={handleDelete} className="cruz" src="./images/icon-cross.svg" alt=""/>
            </div>
        </div>
    )
}

export default Task; 