import React, { useState } from 'react'


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
        <form onSubmit={submitHandler}>
            Choose Rover:
            <select size='1' onChange={event=>setRover(event.target.value)}>
                <option  value='curiosity'>Curiosity</option>
                <option  value='opportunity'>Opportunity</option>
                <option  value='spirit'>Spirit</option>
            </select>
            Choose Camera:
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
            Enter Sol (from 0 to 1000):
            <input value={sol} onChange={event => setSol(event.target.value)}/>
            <div><button>Show images</button></div>
        </form>

    );
}