
import MainNav from './MainNav'
import HomeContent from './HomeContent'
import Destination from './Destination'
import ChallengeIndex from './challengeIndex'
import Technology from './Technology'
import Crew from './Crew'

import { useState, useEffect, createContext } from 'react'

export const MenuContext = createContext<any>([]);

function HomePage(){

    const [MInput, setMInput] = useState('homePage');
    const [display, setDisplay] = useState(<></>);

    //Updates the display whenever the user changes categories via nav
    let currentPage = <HomeContent />
    useEffect(()=>{

        switch (MInput){
            case 'homePage':
                 currentPage = <HomeContent />;
                 break;
            case 'destination':
                 currentPage = <Destination />;
                 break;
            case 'technology':
                currentPage = <Technology />;
                break;
            case 'crew':
                currentPage = <Crew />;
                break;
            default:
                currentPage = <HomeContent />;
            };

            setDisplay(currentPage);

    },[MInput]);


    return(<>
    <MenuContext.Provider value={[MInput, setMInput]}>
        <div id="backgroundWrapper" className={MInput === 'homePage' ? 'home' : MInput === 'crew' ? 'crew' : MInput === 'destination' ? 'destination' : MInput === 'technology' ? 'technology' : 'inactive'}>
            <MainNav />
            <div className='testin'>{display}</div>
        </div>
    </MenuContext.Provider>      
    </>)
}

export default HomePage