import { Component } from 'react';
import SHOP_DATA from '../../Shop.data';
import CollectionPreview from '../collection-preview/CollectionPreview';

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: SHOP_DATA
        }
    }
    render() {
        const { collection } = this.state;
        return (
            <div className='shop-page'>
                {
                    collection.map(({id, ...otherCollectionProps})=>(
                        <div><CollectionPreview key={id} {...otherCollectionProps}/></div>
                    ))
                }
            </div>
        )
    }
}
export default ShopPage;