import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PublicRoute } from "./PublicRoutes";
const AppRoutes = () =>{
    return (
        <Router>
            <Routes>
                {PublicRoute.map( ( PublicRoute, index ) => {
                    return (
                        <Route
                            exact={PublicRoute.exact}
                            key={index}
                            path={PublicRoute.path}
                            element={PublicRoute.component}
                        />
                    );
                } )}
               
            </Routes>
        </Router>
    );
};

export default AppRoutes;
