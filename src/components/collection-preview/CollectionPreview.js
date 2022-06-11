import CollectionItem from '../collection-items/CollectionItem';
import { connect } from 'react-redux';
import { toggeItemsDetail } from '../../redux/detail/detailAction';

import './CollectionPreview.scss';
const CollectionPreview = ({ title, items, toggeItemsDetail}) => {
    return ( 
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <main className='preview'>
                {
                    items.filter((item, i)=> i < 4).map((item)=>(
                        <CollectionItem key={item.id} item={item} toggeItemsDetail={toggeItemsDetail}/>
                    ))
                } 
            </main>
        </div>
     );
};
//if you want to frie the action to go the specific reducer and matchup action type, run mapDispatchToProps.
//note: mDTP is a function that may or may not accept a parameter, which will serve as the payload

const mapDispatchToProps = dispatch => ({
    toggeItemsDetail: () => dispatch(toggeItemsDetail())
})

 
export default connect(null, mapDispatchToProps)(CollectionPreview);