import React from 'react';
import telegram from '../img/telegram.png';
import vk from '../img/vk.png';
import loop from '../img/loop.png';
import menu from '../img/menu.png';
import mail from '../img/mail.png';


const SocialSearh = ({active, setActive}) => {
  return (
    <div className='container '>
        <div className="socialSearch">
            <div className="conectionBlock">
                <a href='#contact'><img src={mail} className="mailImg"/></a>
                <div className="telNum">+7(84540)4-39-78</div>
            </div>
            <div className="socialSearchBlock">
                <img src={telegram} alt=""  className='telegram'/>
                <a href='https://vk.com/public211020434'><img src={vk} alt=""  className='vk'/></a>
                <img src={loop} alt="" width='40px' className='loop'/>
                <img src={menu} alt="" width='40px' className='menuBtn' onClick={() => setActive(!active)}/>
            </div>
        </div>
    </div>
  )
}

export default SocialSearh