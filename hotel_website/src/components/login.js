import React from 'react' ;
import { Link , Redirect} from 'react-router-dom';
export class Login extends React.Component {
    constructor() {
        super();
        this.state={
            redirectToHome:false,
            redirectToSignup:false
        }
        this.dealLogin=this.dealLogin.bind(this);
    }
    dealLogin(e){
        e.preventDefault();
        console.log("adding")
        const obj={
            username: e.target.username.value,
            password: e.target.password.value
        }
        fetch("http://localhost:8081/users/login",{
        method:"POST",
        headers: {
            "Content-Type" : "application/json" ,
        },
        body: JSON.stringify(obj)
        })
        .then(res => {
            console.log(res);
            if (res.ok) return res.json()
            else throw new Error()
        })
        .then(res => {
            this.props.dealSubmit();
            this.setState({redirectToHome:true});
        })
        .catch(error => {
            
            alert('Bad Login Credentials')
           
            console.error(`Error adding user: ${error}`)
        })
    }
    render() {
        if(this.state.redirectToHome)
        {
            return <Redirect to="/"/>
        }
        /*if(this.state.redirectToSignup)
        {
            return <Redirect to="/signup"/>
        }*/
        return (
            <div id="login">
            <div id="sideIntro">
                <p id="p1">Welcome to <span style={{color:"red"}}>Infinity</span> Hotel and Homes</p>
                <p id="p2"><ul>
                <li>The Most Trusted and Fastest Growing Hotel Booking Chain</li>
                <li>Best Deals and special offers Available</li>
                <li>All Variations Available</li>
                </ul>
                <p id="p1" align="right" style={{fontSize:"x-large"}}>HappY Booking !!! </p>
                </p>
            </div>
                <form onSubmit={this.dealLogin} >
                <fieldset>
                <legend>Login</legend>
                    User Name:<br/><input type="text" placeholder="10 characters" maxLength="10" name="username" required/><br/><br/>
                    Password:<br/><input type="password" placeholder="10 characters" maxLength="10" name="password" required/><br/><br/>
                    <input type="submit" id="submit" value="Log In"/>
                    <p>Don't have an account ? <Link to="/signup" style={{color:"red"}}>Sign Up</Link> </p>
                </fieldset>
                </form>
            </div>
        )

        
    }
}