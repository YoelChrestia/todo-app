
const Header = ({handleNight, night, newTask, completed, active}) => {
    const changeTheme = {
        bg: "./images/bg-mobile-light.jpg",
        theme: "./images/icon-moon.svg",
        bginput: "inputlight",
        button: "buttonlight",
        task: "tasklight",
    }
 
    let states;

    const $value = document.getElementById('input')

    if(completed || active){
        states = true;
    } else {
        states = false;
    }

    if(active){
        $value.value = "";
    }

    if(completed){
        $value.value = "";
    }
 
    if(night === true){
        changeTheme.bg = "./images/bg-mobile-dark.jpg"
        changeTheme.theme = "./images/icon-sun.svg"
        changeTheme.bginput = "inputdark"
        changeTheme.button = "buttondark"
        changeTheme.task = "taskdark"
    } else {
        changeTheme.bg = "./images/bg-mobile-light.jpg"
        changeTheme.theme = "./images/icon-moon.svg"
        changeTheme.bginput = "inputlight"
        changeTheme.button = "buttonlight"
        changeTheme.task = "tasklight" 
    }

    return (
    <header>
        <img className="background-mobile" src={changeTheme.bg} alt=""/>
        <div className="logo__contain">
            <h1 className="logo">TODO</h1>
            <img onClick={handleNight} src={changeTheme.theme} alt=""/>
        </div>
        <form onSubmit={newTask} className="form">
            <input id="input" readOnly={states} name="title" className={changeTheme.bginput} type="text" placeholder="Create a new todo.." />
            <button className={changeTheme.button} type="submit"></button>
        </form>
    </header>
    )
}

export default Header;