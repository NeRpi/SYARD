import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from './context/AuthProvider';
import './Authentication.css';

import { Link, useNavigate } from 'react-router-dom';

import axios from '../api/axios';
const LOGIN_URL = 'api/auth/register/';


const Register = ({ setToken }) => {
    const navigate = useNavigate();

    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd1, setPwd1] = useState('');
    const [pwd2, setPwd2] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd1])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd2])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(LOGIN_URL,
                JSON.stringify({ username: user, password: pwd1 }),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            setAuth({ user, pwd1 });
            navigate('/');
            // alert(response?.data?.message)
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
                <h1>Sign Up</h1>
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
                        onChange={(e) => setPwd1(e.target.value)}
                        value={pwd1}
                        required
                    />
                    <br />
                    <input type="password"
                        id="password"
                        placeholder='Password again'
                        onChange={(e) => setPwd2(e.target.value)}
                        value={pwd2}
                        required
                    />
                    <br />
                    <button>Sig Up</button>
                </form>
                <p>
                    Already have an account?<br />
                    <span className="line">
                        <Link to="/">Sign In</Link>
                    </span>
                </p>
            </section>
        </div>

    )
}

export default Register
