import { useContext } from "react";
import{MenuContext} from './HomePage'

    const HomeContent = ()=> {
        const [MInput, setMInput] = useContext(MenuContext);
        return (<>

    <div className={MInput === 'homePage' ? 'inactive' : "home"}>
    
    
    <main id="main" className="grid-container grid-container--home">
        <div>
        <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to
        <span className="d-block fs-900 ff-serif text-white">Space</span></h1>
        
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
        outer space and not hover kind of on the edge of it. Well sit back, and relax 
        because we’ll give you a truly out of this world experience! </p>
        </div>
        <div>
        <a onClick={() => setMInput("destination")} className="large-button uppercase ff-serif text-dark bg-white">Explore</a>
        </div>
    </main>
    </div>

    </>)

    }// end HomeContent

export default HomeContent;