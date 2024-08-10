import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layout/Root/Root";
import Listing from "../pages/Listing/Listing";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import HouseDetails from "../pages/HouseDetails/HouseDetails";
import Favourites from "../pages/Favourites/Favourites";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/listing",
                element: <Listing></Listing>
            },
            {
                path: "/details/:id",
                element: <HouseDetails></HouseDetails>
            },
            {
                path: "/favourites",
                element: <Favourites></Favourites>
            }
        ]
    },
]);

export default router;