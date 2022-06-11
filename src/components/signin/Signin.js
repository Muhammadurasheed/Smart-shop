import { Component } from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import { auth, loginWithGoogle } from '../../firebase/firebase.utils';
import './Signin.scss';

class Signin extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e)=> {
        const { email, password } = this.state;
        e.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({
                email: '',
                password: ''
            })
        } catch(error) {
            console.error(error)
        }
    }

    handleInputChange =(event)=> {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const { email, password } = this.state;
        return (
            
            <div className="signin">
             <h2 className="title">Already have an account?</h2>
             <span>Sign in with email and password</span>
                <form onSubmit={this.handleSubmit}>
                  <FormInput 
                  onChange={this.handleInputChange}
                  type='email' 
                  name='email' 
                  value={email} 
                  label="Email"
                  required />
                  

                  <FormInput 
                  onChange={this.handleInputChange}
                  type='password' 
                  name='password' 
                  value={password} 
                  label="Password"
                  required />
                  

                  <div className="btns">
                  <CustomButton 
                  type='submit'>
                  Sign In
                  </CustomButton>
                  
                  <CustomButton 
                  onClick={loginWithGoogle} 
                  isGoogleSignIn >
                  Sign in with Google
                  </CustomButton>
                  </div>
                </form>
            </div>
        );
    }
}

export default Signin;