import React from 'react'
import Teach from '../../components/Teach'

const About_2 = () => {
  const teachers = [
    {fio:"Щетихина Елена Анатольевна", subject:"математика", exp: 20, src:'/imgTeachers/EA.png', mail: "leskin-artem@mail.ru", tel: "+79678****76"},
    {fio:"Рахманова Людмила Геннадьевна", subject:"Русский язык/Литература", exp: 24, src:'/imgTeachers/LG.png', mail: "leskin-artem@mail.ru", tel: "+79678****76"},
    {fio:"Сколибанова Надежда Константиновна", subject:"История/Обществознание", exp: 22, src:'/imgTeachers/HK.png', mail: "leskin-artem@mail.ru", tel: "+79678****76"},
    {fio:"Сомов Никита Валерьевич", subject:"Физическая культура", exp: 10, src:'/imgTeachers/HV.png', mail: "leskin-artem@mail.ru", tel: "+79678****76"},
    {fio:"Щукина Антонина Николаевна", subject:"География", exp: 40, src:'/imgTeachers/AH.png', mail: "leskin-artem@mail.ru", tel: "+79678****76"},
  ]

  return (
    <div className="page_bg">
      <div className='container'>
      <div className="about_page">
          <div className="header_about_page">
            <div className="path">о нас {'>'} педагогический состав</div>
            <div className="title_page">О нас</div>
            <div className="about_content">
                  {
                    teachers.map(item =>
                      <Teach props={item}/>
                  )}
            </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default About_2