import React from 'react'

const NewsItemPage = ({props}) => {
  return (
    <div className='n_container'>
        <div className="n_img">
            <img src={props.imageUrl} alt="" className='t_img'/>
        </div>
        <div className="n_info">
            <div className="fio">{props.title}</div>
            <div className="new_content">
                   {props.text}
            </div>
        </div>
    </div>
  )
}

export default NewsItemPage