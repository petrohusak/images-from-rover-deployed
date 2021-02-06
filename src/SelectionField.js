import React, { useState } from 'react'
import { Button } from '@material-ui/core';


export default function SelectionField({request}){
    const [rover, setRover] = useState('curiosity');
    const [camera, setCamera] = useState('fhaz');
    const [sol, setSol] = useState('0');
        
    function submitHandler(event){
        event.preventDefault();

        
        if(sol.trim){
            request(rover, sol, camera);
        }
    }
    
    return(
        <form >
            <div className='selectionLine'>
            <span>Choose Rover: </span>
            <select size='1' onChange={event=>setRover(event.target.value)}>
                <option  value='curiosity'>Curiosity</option>
                <option  value='opportunity'>Opportunity</option>
                <option  value='spirit'>Spirit</option>
            </select>
            <span>  Choose Camera: </span>
            <select size='1' onChange={event=>setCamera(event.target.value)}>
                <option value='fhaz'>FHAZ</option>
                <option value='rhaz'>RHAZ</option>
                <option value='mast'>MAST</option>
                <option value='chemcam'>CHEMCAM</option>
                <option value='mahli'>MAHLI</option>
                <option value='mardi'>MARDI</option>
                <option value='navcam'>NAVCAM</option>
                <option value='pancam'>PANCAM</option>
                <option value='minites'>MINITIES</option>
            </select>
            <span> Enter Sol (from 0 to 1000): </span>
            <input className="solInputField"value={sol} onChange={event => setSol(event.target.value)}/>
            </div>
            <div className='explanation'>
                (For Curiosity available cameras FHAZ, RHAZ, MAST, CHEMKAM, MAHLI, MARDI, NAVCAM.<br/>
                For Opportunity and Spirit available cameras FHAZ, RHAZ, NAVCAM, PANCAM, MINITIES.)
            </div>
            <div className='showImagesButton'><Button variant="contained" color="primary" onClick={submitHandler}>Show images</Button></div>
        </form>

    );
}