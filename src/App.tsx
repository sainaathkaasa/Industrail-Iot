
import MyComponent from "./Components/MyComponent/MyComponent"
import { Outlet, useLocation } from "react-router-dom"
import Menubar from "./Components/Menu-bar/Menubar"
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./App.css"

const App = () => {

    const location = useLocation();
    
    return (
        <>
            <Outlet/>
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