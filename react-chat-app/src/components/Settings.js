import React from 'react';
import {Link} from 'react-router-dom';
import SocialFollow from './SocialFollow';
import DarkMode from './DarkMode';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCoffee, faEye} from '@fortawesome/free-solid-svg-icons';
import Button from './button/button';

export default function Settings(props){

 
  const wholecomponent = (
  <div> 
    <h2>Settings</h2>
    <ul>
      <li>
        <Button label="x"></Button>      
      </li>
      <li>
        <FontAwesomeIcon icon={faEye} onClick={()=>{props.passSwitchTheme()}}/>
      </li>
      <li> 
        <DarkMode passSwitchTheme={props.passSwitchTheme}/>
      </li>
      <li>
        <Link to="/notification">Notifications</Link>
      </li>
        <li>
            <Link to="/block">Block this user</Link>
        </li>
    </ul>
    <div className="social-container"><SocialFollow /></div>
  </div>)
  
  return (
    <div>
    {wholecomponent}
   
    </div>
  );
}
