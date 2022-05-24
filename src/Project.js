import './project.css';

function Project(){
    return (
        <div className="login-pg">
            <div className="logo">
                <h1>LOGIN</h1>
            </div>
            <div className='abc'>
                <input type="text" placeholder='USERNAME'></input>
                <input type="text" placeholder='PASSWORD'></input>
                <button type='submit'>SUBMIT</button>
            </div>
           
           
        </div>
    );
}

export default Project;