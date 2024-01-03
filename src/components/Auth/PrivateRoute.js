import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * @component
 * @param {object} props - The props of the component.
 * @param {React.Component} props.component - The component to render if the user is authenticated.
 * @param {object} rest - The rest of the props.
 * @returns {React.Element} A Route element that redirects to the login page if the user is not authenticated.
 */
const PrivateRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem('token');

    return (
        <Route
            {...rest}
            render={(props) =>
                token ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
};

export default PrivateRoute;
