import { useState } from 'react';
import { Vehicle, Capsule, Spaceport } from './TechnologyContent';
import vehicleW from '/src/assets/technology/image-launch-vehicle-landscape.jpg'
import vehicleT from '/src/assets/technology/image-launch-vehicle-portrait.jpg'
import capsuleW from '/src/assets/technology/image-space-capsule-landscape.jpg'
import capsuleT from '/src/assets/technology/image-space-capsule-portrait.jpg'
import spaceportW from '/src/assets/technology/image-spaceport-landscape.jpg'
import spaceportT from '/src/assets/technology/image-spaceport-portrait.jpg'
import useMediaQuery from './hooks/useMediaQuery';

function Technology(){

    const[selection, setSelection] = useState('vehicle')
    const isDesktop = useMediaQuery('(min-width: 45em)');
    
    /* Wide Images */
    const TechPicW = () => {
        return (<>
            <picture hidden={selection === 'vehicle' ? false : true} id="vehicle-image">
                <source srcSet={vehicleW} type="image/jpg" />
                <img src={vehicleW} alt="Space vehicle" />
            </picture> 
        <picture hidden={selection === 'capsule' ? false : true} id="capsule-image">
                <source srcSet={capsuleW} type="image/jpg" />
                <img src={capsuleW} alt="Space capsule" />
            </picture>
        <picture hidden={selection === 'spaceport' ? false : true} id="spaceport-image">
                <source srcSet={spaceportW} type="image/jpg" />
                <img src={spaceportW} alt="Spaceport" />
            </picture>
        </>)
    }

    /* Tall Images */
    const TechPicT = () => {
        return (<>
        <div className="pic-wrapper">
            <picture hidden={selection === 'vehicle' ? false : true} id="vehicle-image">
                <source srcSet={vehicleT} type="image/jpg" />
                <img src={vehicleT} alt="Space vehicle" />
            </picture> 
            <picture hidden={selection === 'capsule' ? false : true} id="capsule-image">
                <source srcSet={capsuleT} type="image/jpg" />
                <img src={capsuleT} alt="Space capsule" />
            </picture> 
           <picture hidden={selection === 'spaceport' ? false : true} id="spaceport-image">
                <source srcSet={spaceportT} type="image/jpg" />
                <img src={spaceportT} alt="Spaceport" />
            </picture>
        </div>
        </>)
    }

    /* Dot menu - Wide */
    const MenuWide = () => {
        return (<>
            <div className="dot-indicators-num flex" role="tablist" aria-label="Technology list">
                <button onClick={()=> setSelection('vehicle')} aria-selected={selection === 'vehicle' ? "true" : "false"} aria-controls="vehicle-tab" role="tab" data-image="vehicle-image" tabIndex={selection === 'vehicle' ? 0 : -1}><span className="sr-only">Launch vehicle</span>1</button>

                <button id="B2" onClick={()=> setSelection('capsule')} aria-selected={selection === 'capsule' ? "true" : "false"} aria-controls="capsule-tab" role="tab" data-image="capsule-image" tabIndex={selection === 'capsule' ? 0 : -1}><span className="sr-only">Space capsule</span>2</button>

                <button onClick={()=> setSelection('spaceport')} aria-selected={selection === 'spaceport' ? "true" : "false"} aria-controls="spaceport-tab" role="tab" data-image="spaceport-image" tabIndex={selection === 'spaceport' ? 0 : -1}><span className="sr-only">Spaceport</span>3</button>
            </div>
        </>)
    }

    /* Dot menu - Tall */
    const MenuTall = () => {
        return (<>
            <div id='Btn1' className="dot-indicators-num" role="tablist" aria-label="Technology list 1">
                <button onClick={()=> setSelection('vehicle')} aria-selected={selection === 'vehicle' ? "true" : "false"} aria-controls="vehicle-tab" role="tab" data-image="vehicle-image" tabIndex={selection === 'vehicle' ? 0 : -1}><span className="sr-only">Launch vehicle</span>1</button>
            </div>
            <div id='Btn2' className="dot-indicators-num" role="tablist" aria-label="Technology list 2">
                <button id="B2" onClick={()=> setSelection('capsule')} aria-selected={selection === 'capsule' ? "true" : "false"} aria-controls="capsule-tab" role="tab" data-image="capsule-image" tabIndex={selection === 'capsule' ? 0 : -1}><span className="sr-only">Space capsule</span>2</button>
            </div>
            <div id='Btn3' className="dot-indicators-num" role="tablist" aria-label="Technology list 3">
                <button onClick={()=> setSelection('spaceport')} aria-selected={selection === 'spaceport' ? "true" : "false"} aria-controls="spaceport-tab" role="tab" data-image="spaceport-image" tabIndex={selection === 'spaceport' ? 0 : -1}><span className="sr-only">Spaceport</span>3</button>
            </div>
        </>)
    }

    return (<>

        <main className="grid-container grid-container--technology flow">
            <div className='title-box'>
            <h1 className="numbered-title tech-title"><span aria-hidden="true">03</span> Space launch 101</h1>
            </div>

            {/* dot menu */}
            <>{isDesktop ? <MenuTall /> : <MenuWide />}</>

            {/* content */}
            <>{selection === 'vehicle' ? <Vehicle /> : selection === 'capsule' ? <Capsule /> : selection === 'spaceport' ? <Spaceport /> : <Vehicle />}</>

            {/* image category */}
            <>{isDesktop ? <TechPicT /> : <TechPicW />}</>
        </main>
    </>)
} 

export default Technology;