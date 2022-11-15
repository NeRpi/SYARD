import { useContext, React } from 'react';
import AuthContext from './context/AuthProvider';
import './Authentication.css';

import { Link, useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';


const LogOut = ({ setToken }) => {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setAuth({});
        setToken('');
        navigate('/');
    }

    return (
        <div className="LoginAndRegister">
            <section>
                <h1>Log out</h1>
                <form onSubmit={handleSubmit}>
                    <p>Do you want to leave your account?</p>
                    <button>Log Out</button>
                </form>
                <p>
                    <span className="line">
                        <Link to="/">Go to home</Link>
                    </span>
                </p>
            </section>
        </div>
    )
}

export default LogOut

LogOut.propTypes = {
    setToken: PropTypes.func.isRequired
};