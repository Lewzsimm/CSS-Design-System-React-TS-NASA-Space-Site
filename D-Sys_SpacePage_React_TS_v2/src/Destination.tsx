import { createContext, useContext, useReducer } from 'react';
import moonPicW from '/src/assets/destination/image-moon.webp'
import moonPicP from '/src/assets/destination/image-moon.png'
import marsPicW from '/src/assets/destination/image-mars.webp'
import marsPicP from '/src/assets/destination/image-mars.png'
import europaPicW from '/src/assets/destination/image-europa.webp'
import europaPicP from '/src/assets/destination/image-europa.png'
import titanPicW from '/src/assets/destination/image-titan.webp'
import titanPicP from '/src/assets/destination/image-titan.png'
import { gReducer, initState, DEST_ACTION } from './context/DestReducer';
import {Moon, Mars, Europa, Titan} from './Planets';



function Destination(){

  const DestReducer = useReducer(gReducer, initState);
  const DestContext = createContext<any>(DestReducer);
  const [state, dispatch] = useContext(DestContext);

return (<>

<DestContext.Provider value={state}>

  <main id="main" className="grid-container grid-container--destination flow">
      <h1 className="numbered-title"><span aria-hidden="true">01</span> Pick your destination</h1>
      

      <picture hidden={state.smInput === "moon" ? false: true} id="moon-image">
        <source srcSet={moonPicW} type="image/webp" />
        <img src={moonPicP} alt="the moon" />
      </picture>

      <picture hidden={state.smInput === "mars" ? false: true} id="mars-image">
        <source srcSet={marsPicW} type="image/webp" />
        <img src={marsPicP} alt="the planet mars" />
      </picture>

      <picture hidden={state.smInput === "europa" ? false: true} id="europa-image">
        <source srcSet={europaPicW} type="image/webp" />
        <img src={europaPicP} alt="the planet europa" />
      </picture>

      <picture hidden={state.smInput === "titan" ? false: true} id="titan-image">
        <source srcSet={titanPicW} type="image/webp" />
        <img src={titanPicP} alt="the moon titan" />
      </picture>
      
      
      <div className="tab-list underline-indicators flex" role="tablist" aria-label="destination list">

          <button id="btn-moon" onClick={ ()=> (dispatch({ type: DEST_ACTION.ONMOON}))} aria-selected={state.smInput === "moon" ? 'true' : 'false'} role="tab" aria-controls="moon-tab" className="uppercase ff-sans-cond text-accent letter-spacing-2" tabIndex={state.smInput === "moon" ? 0 : -1} data-image="moon-image">Moon</button>

          <button id="btn-mars" onClick={ ()=> (dispatch({ type: DEST_ACTION.ONMARS}))} aria-selected={state.smInput === "mars" ? 'true' : 'false'} role="tab" aria-controls="mars-tab" className="uppercase ff-sans-cond text-accent letter-spacing-2" tabIndex={state.smInput === "mars" ? 0 : -1} data-image="mars-image">Mars</button>

          <button id="btn-europa" onClick={ ()=> (dispatch({ type: DEST_ACTION.ONEUROPA}))} aria-selected={state.smInput === "europa" ? 'true' : 'false'} role="tab" aria-controls="europa-tab" className="uppercase ff-sans-cond text-accent letter-spacing-2" tabIndex={state.smInput === "europa" ? 0 : -1} data-image="europa-image">Europa</button>

          <button id="btn-titan" onClick={ ()=> (dispatch({ type: DEST_ACTION.ONTITAN}))} aria-selected={state.smInput === "titan" ? 'true' : 'false'} role="tab" aria-controls="titan-tab" className="uppercase ff-sans-cond text-accent letter-spacing-2" tabIndex={state.smInput === "titan" ? 0 : -1} data-image="titan-image">Titan</button>

      </div>


  {/* // <!-- Render-toggle: Planet info --> */}
  <>{state.smInput === 'moon' ? <Moon /> : state.smInput === 'mars' ? <Mars /> : state.smInput === 'europa' ? <Europa /> : state.smInput === 'titan' ? <Titan /> : <Moon />  }</>


      
  </main>      
</DestContext.Provider>

</>)
}


export default Destination;