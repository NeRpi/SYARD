import LogOut from './Authentication/LogOut';
import Home from './Content/Home'
import Manga from './Content/Manga';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css'

import { Routes, Route, Link } from 'react-router-dom';

const MainWindow = ({ setToken }) => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Podcasts</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" />
                        <Nav>
                            <Nav.Link as={Link} to="/logout">Log out</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logout" element={<LogOut setToken={setToken} />} />
                <Route exact path="/mangas/:id" element={<Manga />} />
            </Routes>
        </>
    );
}


export default MainWindow;