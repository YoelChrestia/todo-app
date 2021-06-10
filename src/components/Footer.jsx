import React from 'react';

const Footer = ({night, seeCompleted, seeAll, seeActive}) => {
    const selectTaskTheme = {
        selectTask: "selectTask__light"
    }
    
    if(night === true){
        selectTaskTheme.selectTask = "selectTask__dark"
    } else {
        selectTaskTheme.selectTask = "selectTask__light"
    }

    return(
        <div className={selectTaskTheme.selectTask}>
            <p onClick={seeAll} className="textblue">All</p>
            <p onClick={seeActive} className="active textblue">Active</p>
            <p onClick={seeCompleted} className="textblue">Completed</p>
        </div>
    )
}

export default Footer;

