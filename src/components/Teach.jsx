import React from 'react'

const Teach = ({props}) => {
    console.log(props)
  return (
    <div className='teach_container'>
        <div className="teacher_img">
            <img src={props.src} alt="" className='t_img'/>
        </div>
        <div className="teacher_info">
            <div className="fio">{props.fio}</div>
            <div className="subject">
                <div className="pods">Предмет (стаж):</div>
                {props.subject}
                <div className="exp">({props.exp})</div>
            </div>
            <div className="teacher_contacts">
                    <div className="t_mail"><div className="pods">Электронная почта:</div>{props.mail}</div>
                    <div className="t_tel"><div className="pods">Номер телефона:</div>{props.tel}</div>
            </div>
        </div>
    </div>
  )
}

export default Teach