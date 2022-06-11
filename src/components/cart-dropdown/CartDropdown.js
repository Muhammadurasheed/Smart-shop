import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CartItemComponent } from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { useNavigate } from 'react-router-dom';

import './CartDropdown.scss';

const CartDropdown = ({ CartItems }) => {
    let navigate = useNavigate();
    return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                CartItems.length ?
                (CartItems.map(cart => 
                (<CartItemComponent key={cart.id} item={cart} />)))
                :
                <span className='empty-message'>
                    Your cart is empty!
                </span>
            }
        </div>
        <CustomButton onClick={()=> navigate('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
)}

const mapStateToProps = createStructuredSelector ({
    CartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);