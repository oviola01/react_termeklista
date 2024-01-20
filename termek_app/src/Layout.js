import { Outlet, Link } from "react-router-dom";
import home from "./home.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./layout.css";


const Layout = () => {
    return (
        <>
            <main>
                <header></header>
            </main>

            <nav>
                <div class="navBar">
                    <div class="menu">
                        <Link to="/"><img width="40px" src={home} alt="Home" /></Link>
                    </div>
                    <div class="menu">
                        <Link to="/admin">Admin</Link>
                    </div>
                    <div class="menu">
                        <Link to="/public">Public</Link>
                    </div>
                </div>
            </nav>
            <article>
                <Outlet />
            </article>
            <footer></footer>
        </>
    )
};

export default Layout;

/*            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav><Link to="/"><img width="20px" src={home} alt="Home" /></Link></Nav>
                        <Nav><Link to="/admin">Admin</Link></Nav>
                        <Nav><Link to="/public">Public</Link></Nav>
                    </Nav>
                </Container>
            </Navbar>
*/