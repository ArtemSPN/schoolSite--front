import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const TitleBlock = () => {
  return (
    <div className='container'>
        <div className="titleBlock">
                <div className="logo">
                    <Link to='/'><img src={logo} className='logoImg'/></Link>
                </div>
                <div className="textBlockTitle">
                    <div className="subTitle">Управление общего образования администрации Ртищевского муниципального района Саратовской области</div>
                    <div className="title">Муниципальное общеобразовательное учреждение "Средняя общеобразовательная школа № 2 г. Ртищево Саратовской области"</div>                
                </div>
        </div>
    </div>
  )
}

export default TitleBlock