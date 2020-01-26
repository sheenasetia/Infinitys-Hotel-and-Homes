import React from 'react';
import { Link , Redirect} from 'react-router-dom';
export class Signup extends React.Component {
    constructor() {
        super();
        this.state={
            redirectToLogin:false
        }
        this.addUser=this.addUser.bind(this);
    }
    addUser(e){
        e.preventDefault();
        console.log("adding")
        const obj={
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            username: e.target.username.value,
            password: e.target.password.value,
            mobile: e.target.mobile.value,
        }
        fetch("http://localhost:8081/users/register",{
        method:"POST",
        headers: {
            "Content-Type" : "application/json" ,
        },
        body: JSON.stringify(obj)
        })
        .then(res => {
            if (res.ok) return res.json()
            else throw new Error();
        })
        .then(res => {
            alert(`Account created Successfully `)
            this.setState({redirectToLogin:true});
        })
        .catch(error => {
            alert(`Error creating User`)
            console.error(`Error adding user: ${error}`)
        })
    }
    render() {
        if(this.state.redirectToLogin)
        {
            return <Redirect to="/login"/>
        }
        return (
            <div id="signup">
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
                <form onSubmit={this.addUser}>
                <fieldset>
                <legend>Create Your Account</legend>
                    FirstName:<br/><input type="text" placeholder="Not more than 8 characters" name="firstname" maxlength="8" required/><br/><br/>
                    LastName:<br/><input type="text" placeholder="Not more than 8 characters" name="lastname" maxlength="8" required/><br/><br/>
                    User Name:<br/><input type="text" placeholder="Not more than 10 characters" name="username" maxlength="10" required/><br/><br/>
                    Password:<br/><input type="password" placeholder="Not more than 10 characters" name="password" maxlength="10" required/><br/><br/>
                    Mobile:<br/><input type="tel" placeholder="Valid 10 digit number only" name="mobile" maxlength="10" pattern="[789][0-9]{9}" /><br/><br/>
                    <input type="submit" name="submit" value="Sign Up" id="submit" />
                    <p>Already have an account ? <Link to="/login" style={{color:"red"}}>Login In</Link> </p>
                </fieldset>
                </form>
            </div>
        )
    }

}
