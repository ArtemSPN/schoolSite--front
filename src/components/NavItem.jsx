import React from 'react';
import NavPopup from './NavPopup';
import strelka from '../img/strelka.png';
import { useState } from 'react';

const NavItem = ({props}) => {
  console.log(props);

  function closePopupNav(){
    const m = document.querySelectorAll('.NavPopup');
    for(let i = 0; i < m.length; i++){
      if(document.querySelectorAll('.NavPopup')[i].style.display == "block" || document.querySelectorAll('.NavPopup')[i].style.display == "flex"){
      document.querySelectorAll('.NavPopup')[i].style.display = "none";
      break
      }
    }
  }

  return (
    <div className="navItem"> 
      <div className="NavItemCon"
        onClick={() =>{
          let activeP = 10;
          const m = document.querySelectorAll('.NavPopup');
          for(let i = 0; i < m.length; i++){
            if(document.querySelectorAll('.NavPopup')[i].style.display == "block" || document.querySelectorAll('.NavPopup')[i].style.display == "flex"){
              document.querySelectorAll('.NavPopup')[i].style.display = "none";
              activeP = i;
              break
            }
          }
          if(activeP !== props.id - 1){ 
            props.id == 5
            ?document.querySelectorAll('.NavPopup')[props.id - 1].style.display = "flex"
            :document.querySelectorAll('.NavPopup')[props.id - 1].style.display = "block";
            document.querySelectorAll('.NavPopup')[props.id - 1].style.borderColor = props.color;
          }
        }
        }
      >
        <div className="navText">{props.title}</div>
        <div className="strelka">
          <img src={strelka} alt="" className="strelka" />
        </div>
      </div>
      <NavPopup props={props.puncts} id={props.id} key={props.id} fun={closePopupNav}/>
    </div>
  )
}

export default NavItem