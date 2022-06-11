import { useNavigate } from 'react-router-dom';
import './Menu.scss';

const Menu = ({ title, imageUrl, size, linkUrl }) => {
    let navigate = useNavigate();
    return ( 
     
        <div  className={`${size} menu-items`} 
            onClick={()=>(navigate(linkUrl))}
        >
            <div 
                className='background-image'
                style={{
            backgroundImage: `url(${imageUrl})`
        }}
            />

            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
     );
}
 
export default Menu;