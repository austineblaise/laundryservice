import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {

    // const { isAuthenticated, loading, user } = useSelector(state => state.auth)
    const cart = useSelector((state) => state.cart);

    const { cartItems, shippingInfo } = cart;
    
    const userRegister = useSelector((state) => state.auth);
    const { authData, loading, error } = userRegister;
    
    const user = JSON.parse(localStorage.getItem("profile"));



    return (
        <Fragment>
           { !loading && (
                <Route
                    {...rest}
                    render={props => {
                        if (cartItems.length === 0) {
                            return <Redirect to='/cart' />
                        }

                        if (shippingInfo.length === 0) {
                            return <Redirect to="checkout" />
                        }

                        // if(!authData){
                        //     return <Redirect to="auth" />
                        // }

                        return <Component {...props} />
                    }}
                />
            )}
        </Fragment>
    )
}

export default ProtectedRoute





















// import {
// 	BrowserRouter as Router,
// 	Switch,
// 	Route,
// 	Link,
// 	Redirect,
// } from "react-router-dom";
// import { useSelector } from "react-redux";

// import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";







// const PrivateRoute = ({ children, ...rest }) => {
//     const cart = useSelector((state) => state.cart);

// 	const { cartItems, shippingInfo } = cart;
    


// //   const user = JSON.parse(localStorage.getItem("profile"));
//   return (
//     <Route {...rest} render={({ location }) => {
//       return shippingInfo
//         ? children
//         : <Redirect to={{
//             pathname: '/checkout',
//             state: { from: location, error: toast.error("Please, You have no order!!!", { position: "top-left" }) }
//           }} /> 
          
//     }} />
//   )
// }


// export default PrivateRoute;
