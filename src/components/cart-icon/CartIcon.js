import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCounts } from '../../redux/cart/cart.selector';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cartAction';

import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden , itemCount }) => (
    <div className='cart-icon' onClick={ toggleCartHidden }>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCounts
})

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CartIcon);