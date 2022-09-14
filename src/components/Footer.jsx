import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    console.log(localStorage.getItem('admin'))
  return (
    <div>
        <div className="footer">
            <div className="container">
                <div className="fotContent">
                    <div className="leftF">
                        <div className="lineL1">Какая-то информация</div>
                        <div className="lineL2">Что-то о школе</div>
                    </div>
                    <div className="rightF">
                        <div className="lineR1">что-то еще</div>
                        <div className="lineR2"><Link to={localStorage.getItem('admin')?"/admin":"/adminA"}>Страница администратора</Link></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer