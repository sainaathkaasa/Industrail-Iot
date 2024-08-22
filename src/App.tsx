
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import Menubar from "./Components/Menu-bar/Menubar"
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./App.css"
import Header from "./Components/Header/Header";
import { useEffect } from "react";

const App = () => {

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        } else {
            navigate('/dashboard');
        }
    }, [navigate]);
    
    return (
        <>
            <Header/>
            <Menubar />
            <TransitionGroup component={null}>
                <CSSTransition
                    key = { location.pathname }
                    classNames={{
                        enter: 'page-enter',
                        exit: 'page-exit',
                    }}
                    timeout={500}
                >
                    <Outlet />
                </CSSTransition>
            </TransitionGroup>
        </>
    )
}

export default App