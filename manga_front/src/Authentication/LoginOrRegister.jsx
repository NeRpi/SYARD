import Login from './Login'
import Register from './Register';

import PropTypes from 'prop-types';

import { Routes, Route } from 'react-router-dom';


function LoginOrRegister({ setToken }) {
    return (
        <Routes>
            <Route path='/' element={<Login setToken={setToken} />} />
            <Route path="/signup" element={<Register setToken={setToken} />} />
        </Routes>);
}

export default LoginOrRegister;

LoginOrRegister.propTypes = {
    setToken: PropTypes.func.isRequired
};