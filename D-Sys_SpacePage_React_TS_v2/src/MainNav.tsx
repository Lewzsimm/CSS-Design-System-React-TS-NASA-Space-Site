import { useContext, useState, useEffect } from "react"
import{MenuContext} from './HomePage'
import { Divide as Hamburger } from 'hamburger-react'

import logoPic from './assets/shared/logo.svg'

    function MainNav(){
    const [MInput, setMInput] = useContext(MenuContext);
    const [burgerToggle, setBurgerToggle] = useState('closed');
    const [hamburgerState, setHamburgerState] = useState(closed);

        useEffect(()=>{
            setBurgerToggle(hamburgerState === false ? 'closed' : 'open')
        },[hamburgerState])


        return (<> 
    <a className="skip-to-content" href="#main">Skip to content</a>

    <header className="primary-header flex">
        <div>
        <img src={logoPic} alt="space tourism logo" className="logo" />
        </div>

        <div className={burgerToggle === 'open' ? 'mobile-nav-toggle' : 'mobile-nav-toggle'} onClick={() => setBurgerToggle(burgerToggle === 'closed' ? 'open' : 'closed')} aria-controls="primary-navigation"><Hamburger label="Hamburger Menu"  toggled={hamburgerState} toggle={setHamburgerState} /><span className="sr-only" aria-expanded={burgerToggle === 'open' ? "true" : "false"}>Menu</span></div>
        <nav>

            <ul id="primary-navigation" data-visible={burgerToggle === 'open' ? "true" : "false"} className="primary-navigation underline-indicators flex">
                <li className={MInput === 'homePage' ? 'active' : 'inactive'}   ><a className="ff-sans-cond uppercase text-white letter-spacing-2" onClick={() => {setMInput("homePage"); setBurgerToggle('closed'), setHamburgerState(false)}}><span aria-hidden={MInput === 'homePage' ? "false" : "true"}>00</span>Home</a> </li>
                <li className={MInput === 'destination' ? 'active' : 'inactive'}  ><a className="ff-sans-cond uppercase text-white letter-spacing-2" onClick={() => {setMInput("destination"); setBurgerToggle('closed'), setHamburgerState(false)}}><span aria-hidden={MInput === 'destination' ? "false" : "true"}>01</span>Destination</a></li>
                <li className={MInput === 'crew' ? 'active' : 'inactive'}  ><a className="ff-sans-cond uppercase text-white letter-spacing-2" onClick={() => {setMInput("crew"); setBurgerToggle('closed'), setHamburgerState(false)}}><span aria-hidden={MInput === 'crew' ? "false" : "true"}>02</span>Crew</a></li>
                <li className={MInput === 'technology' ? 'active' : 'inactive'}  ><a className="ff-sans-cond uppercase text-white letter-spacing-2" onClick={() => {setMInput("technology"); setBurgerToggle('closed'), setHamburgerState(false)}}><span aria-hidden={MInput === 'technology' ? "false" : "true"}>03</span>Technology</a></li>
            </ul>
        </nav>
    </header> 

        </>)

    }//End MainNav

    export default MainNav;