import React, {useState} from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import menu from '../../../img/list.png';

const Menu = ({header,items, active, setActive}) => {
    const [secondUlActive1, setSecondUlActive1] = useState(false);
    const [secondUlActive2, setSecondUlActive2] = useState(false);
    const [secondUlActive3, setSecondUlActive3] = useState(false);
    const [secondUlActive4, setSecondUlActive4] = useState(false);
    const [secondUlActive5, setSecondUlActive5] = useState(false);

    const function_array = [setSecondUlActive1, setSecondUlActive2 ,setSecondUlActive3, setSecondUlActive4,setSecondUlActive5];
    const state_array = [secondUlActive1, secondUlActive2 ,secondUlActive3, secondUlActive4,secondUlActive5]
  return (
    <div className={active?"menu active": "menu"} onClick={() => setActive(false)}>
        <div className="blur"  onClick={(e) => e.stopPropagation()}></div>
        <div className="menu__content" onClick={(e) => e.stopPropagation()}>
            <div className="menu__header">
                {header}
                <img src={menu} alt="" width='30px' className='menuBtnS' onClick={() => setActive(!active)}/>
            </div>
            <ul className='mainUl'>
                {items.map((iteM, index1) =>
                    <li className="mainLi" onClick={() => function_array[index1](!state_array[index1])} >
                        {iteM.value}
                        <ul className={state_array[index1]? `secondUl${iteM.id} activeUl`: `secondUl${iteM.id}`}>
                            {iteM.puncts.map((item, index) =>
                                <li className='secondLi' onClick={() => function_array[index1](!state_array[index1])}>
                                    <Link to={`${iteM.link}${index+1}`} onClick={() => setActive(!active)} className='secondLi'>{item}</Link>
                                </li>
                            )}
                        </ul>
                    </li>  
                )}
            </ul>
        </div>
    </div>
  )
}

export default Menu