import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import { AddItem } from '../../redux/cart/cartAction';

import './CollectionItem.scss';

const CollectionItem = ({ item, AddItem, toggeItemsDetail }) => {
    const { name, price, imageUrl } = item;
    return ( 
        <div className='collection-items'>
            <div className='image'
            onClick={toggeItemsDetail}
            style={{
                background: `url(${imageUrl})`
            }}
            />
            
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={()=> AddItem(item)} inverted >Add to Cart</CustomButton>
            
        </div>
     );
}



const mapDispatchToProps = dispatch => ({
    AddItem: item => dispatch(AddItem(item))
})
 
export default connect(null, mapDispatchToProps)(CollectionItem);