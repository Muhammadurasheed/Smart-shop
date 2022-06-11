import Signin from '../../components/signin/Signin';
import SignUp from '../../components/signUp/SignUp';
import './SigninAndSignup.scss';

const SigninAndSignup = () => {
    return ( 
        <div className='signin-and-signup'>
           <Signin />
           <SignUp />
        </div>
     );
}
 
export default SigninAndSignup;