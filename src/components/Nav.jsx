import React from 'react';
import school from '../img/university.png';
import parents from '../img/parents.png';
import students from '../img/reading.png';
import teacher from '../img/teacher.png';
import clas from '../img/apple.png';
import strelka from '../img/strelka.png';
import NavPopup from './NavPopup';
import NavItem from './NavItem';
import { useState } from 'react';


const Nav = () => {
   
    const [navItemArray, SetNavItemArray] = useState([
        {title:'О нас', id: 1, puncts: ['Общая информация', "Педагогический состав", "Отзывы", "Новости", "Общественная жизнь", "Фото и видео"], color: "#d1a60e"},
        {title:'Родителям', id: 2,puncts: ['Алгоритм поступления', "Свободные места", "Дошкольное образование", "Вопрос-ответ", "Питание"], color: "#d1380e"},
        {title:'Учащимся', id: 3,puncts: ['Расписание, учебные периоды, каникулы', "Государственная итоговая аттестация", "Олимпиады, конкурсы и конференции", "Новости", "Общественная жизнь", "Фото и видео"], color: "#86227d"},
        {title:'Учителям', id: 4,puncts: ['Общая информация', "Педагогический состав", "Отзывы", "Новости", "Общественная жизнь", "Фото и видео"], color: "#055f78"},
        {title:'Классы', id: 5,puncts: ['1 класс', "2 класс", "3 класс", "4 класс", "5 класс", "6 класс", '7 класс', "8 класс", "9 класс", "10 класс", "11 класс",], color: "#34cd6f"},
    ])

   
  return (
        <div className='container'>
            <div className="nav">
                {
                    navItemArray.map((item) =>
                        <NavItem props={item} key={item.id}/>
                    )
                }
            </div>
        </div>
  )
}

export default Nav