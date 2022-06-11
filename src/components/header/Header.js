import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/comfort-boutique.svg';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { connect } from 'react-redux';
import './Header.scss';

const Header = ({ currentUser, hidden }) => {
    return ( 
        <nav className='header'>
         <Link className='logo-container' to='/'>
            <Logo className='logo' />
         </Link>
         <div className='options'>
            <Link className='option' to='/shop'> SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {
               currentUser ?
               (<div className='option' onClick={()=>{auth.signOut()}}>SIGN OUT</div>)
               :
              ( <Link className='option' to='./signin'>SIGN IN</Link>)
            }
            <CartIcon />
        </div>
            {
               hidden ?
               null : <CartDropdown />
            }
        </nav>
     );
}

const mapStateToProps = createStructuredSelector (
   {
      currentUser: selectCurrentUser,
      hidden: selectCartHidden
   }
)
 
export default connect(mapStateToProps)(Header);