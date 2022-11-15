import { useRef, useState, useEffect, useContext, React } from 'react';
import AuthContext from './context/AuthProvider';
import './Authentication.css';

import { Link, useNavigate } from 'react-router-dom';

import axios from '../api/axios';
import PropTypes from 'prop-types';

const LOGIN_URL = 'api/auth/login/';

const Login = ({ setToken }) => {
    const navigate = useNavigate();

    const { auth, setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState(auth.user ? auth.user : '');
    const [pwd, setPwd] = useState(auth.pwd1 ? auth.pwd1 : '');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ username: user, password: pwd }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

            const accessToken = response?.data?.access;
            const role = response?.data?.role;
            setAuth({ user, pwd, role, accessToken });
            setUser('');
            setPwd('');
            setToken(accessToken);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing User Name or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unathotized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    };

    return (
        <div className="LoginAndRegister">
            <section>
                <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">{errMsg}</p>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        id="username"
                        placeholder='Username'
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    />
                    <br />
                    <input type="password"
                        id="password"
                        placeholder='Password'
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                    />
                    <br />
                    <button onClick={() => { navigate('/') }}>Sig In</button>
                </form>
                <p>
                    Need an Account?<br />
                    <span className="line">
                        <Link to="/signup">Sign Up</Link>
                    </span>
                </p>
            </section>
        </div>
    )
}

export default Login

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};