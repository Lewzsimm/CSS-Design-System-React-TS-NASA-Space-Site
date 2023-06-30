import { useState } from 'react';
import { Commander, Pilot, Mission, Engineer } from "./CrewMembers";

import anousheh from '/src/assets/crew/image-anousheh-ansari.webp';
import anoushehP from '/src/assets/crew/image-anousheh-ansari.png';
import hurley from '/src/assets/crew/image-douglas-hurley.webp';
import hurleyP from '/src/assets/crew/image-douglas-hurley.png';
import shuttleworth from '/src/assets/crew/image-mark-shuttleworth.webp';
import shuttleworthP from '/src/assets/crew/image-mark-shuttleworth.png';
import glover from '/src/assets/crew/image-victor-glover.webp';
import gloverP from '/src/assets/crew/image-victor-glover.png';




function Crew(){

   const [selection, setSelection] = useState('commander');

return (<>

<main id="main" className="grid-container grid-container--crew flow">
    <h1 className="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>
    
    <div className="dot-indicators flex" role="tablist" aria-label="crew member list">
      <button onClick={()=> setSelection('commander')} aria-selected={selection === 'commander' ? "true" : "false"} aria-controls="commander-tab" role="tab" data-image="commander-image" tabIndex={selection === 'commander' ? 0 : -1}><span className="sr-only">The commander</span></button>
      <button onClick={()=> setSelection('mission')} aria-selected={selection === 'mission' ? "true" : "false"} aria-controls="mission-tab" role="tab" data-image="mission-image" tabIndex={selection === 'mission' ? 0 : -1}><span className="sr-only">The mission specialist</span></button>
      <button onClick={()=> setSelection('pilot')} aria-selected={selection === 'pilot' ? "true" : "false"} aria-controls="pilot-tab" role="tab" data-image="pilot-image" tabIndex={selection === 'pilot' ? 0 : -1}><span className="sr-only">The pilot</span></button>
      <button onClick={()=> setSelection('engineer')} aria-selected={selection === 'engineer' ? "true" : "false"} aria-controls="crew-tab" role="tab" data-image="crew-image" tabIndex={selection === 'engineer' ? 0 : -1}><span className="sr-only">The crew engineer</span></button>
    </div>
    

    <>{selection === 'commander' ? <Commander /> : selection === 'mission' ? <Mission /> : selection === 'pilot' ? <Pilot /> : selection === 'engineer' ? <Engineer /> : <Commander />}</>
    
    
    <picture hidden={selection === 'commander' ? false : true} id="commander-image">
      <source srcSet={hurley}  type="image/webp" />
      <img src={hurleyP} alt="douglas hurley" />
    </picture>
    <picture hidden={selection === 'mission' ? false : true} id="mission-image">
      <source srcSet={shuttleworth} type="image/webp" />
      <img src={shuttleworthP} alt="mark shuttleworth" />
    </picture>
    <picture hidden={selection === 'pilot' ? false : true} id="pilot-image">
      <source srcSet={glover} type="image/webp" />
      <img src={gloverP} alt="victor glover" />
    </picture>
    <picture hidden={selection === 'engineer' ? false : true}  id="crew-image">
      <source srcSet={anousheh} type="image/webp" />
      <img src={anoushehP} alt="anousheh ansari" />
    </picture>
  </main>

</>)
};
export default Crew;