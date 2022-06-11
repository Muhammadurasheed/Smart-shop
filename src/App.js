import { Component } from 'react';
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './components/shop/ShopPage';
import ItemDetail from './components/detail/ItemDetail';
import { connect } from 'react-redux';
import SigninAndSignup from './pages/signin-and-signup/SigninAndSignup';
import Checkout from './pages/checkout/Checkout';
import { auth, createUserProfileDoc } from '././firebase/firebase.utils';
import { Route, Routes, Navigate } from 'react-router-dom';
import { setCurrentUser } from './redux/user/user.action';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import './App.scss';



class App extends Component {

    unsubscribeFromAuth = null;

    componentDidMount() {
      const { setCurrentUser } = this.props;

      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
       if(userAuth) {
        const anotheruserRef = await createUserProfileDoc(userAuth);
        anotheruserRef.onSnapshot(snapShot => {
         setCurrentUser({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        }, ()=>console.log('fgfgf', this.state))
      })
       } else {
        setCurrentUser(userAuth)
       }
      })
    }

    componentWillUnmount() {
      this.unsubscribeFromAuth()
    }

    render() { 
        return ( 
            <div>
             {/* <Header />
              <Routes>
                <Route path='/' element={ <Homepage />} />
                <Route path='/shop' element={<ShopPage />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/details' element={<ItemDetail/>} />
                <Route path='/signin' element={this.props.currentUser? <Navigate to='/' /> : <SigninAndSignup />} />
              </Routes> */}
            </div>
         );
    }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

 const dispatchToProps = dispatch =>({
   setCurrentUser: user => dispatch(setCurrentUser(user))
 })
export default connect(
   mapStateToProps,
   dispatchToProps
   )(App);