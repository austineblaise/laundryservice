import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from "react-router-dom";

import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const PrivateRoute = ({ children, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <Route {...rest} render={({ location }) => {
      return user
        ? children
        : <Redirect to={{
            pathname: '/auth',
            state: { from: location, error: toast.info("Please, You need to login first!!!", { position: "top-left" }) }
          }} />
    }} />
  )
}


export default PrivateRoute;













// const ProtectedRoute = ({ component: Comp, loggedIn, path, ...rest }) => {
// 	const user = JSON.parse(localStorage.getItem("profile"));

// 	return (
// 		<Route
// 			path={path}
// 			{...rest}
// 			render={(props) => {
// 				return user ? (
// 					<Comp {...props} />
// 				) : (
// 					<Redirect
// 						to={{
// 							pathname: "/selectionpage",
// 							state: {
// 								prevLocation: path,
// 								error: "You need to login first!",
// 							},
// 						}}
// 					/>
// 				);
// 			}}
// 		/>
// 	);
// };

// export default ProtectedRoute;
