import React from "react"
import '../style/darkmode.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCoffee, faEye} from '@fortawesome/free-solid-svg-icons';

export default function Darkmode(props){
    
    return(
    <div>
        <FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon={faEye} />
        <button id='darkmode-button' onClick={()=>{props.passSwitchTheme()}}>Change mood</button>
    </div>)
}
