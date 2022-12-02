import { useNavigate } from "react-router-dom";
import "./login.css"

function Login(){
    const navigate = useNavigate();

    function handleFormSubmit(event){
        navigate("/home");
    }
    return(
        <div className="login">
        
        <div className="container">
        <h3>Please Sign In</h3>
        <form onSubmit={handleFormSubmit} className="login-form" action="">
           <div className="mb-3">
        
           
           <label className="form-label" htmlFor="">Email</label>
            <input type="email" className="form-control"/>
            </div>
           <div className="mb-3">
        
           
           <label className="form-label" htmlFor="">Password</label>
            <input type="password" className="form-control"/>
            </div>
            <button className="float-end btn btn-primary"> Sign In</button>
        </form>
        </div>
        </div>
    )

}

export default  Login;