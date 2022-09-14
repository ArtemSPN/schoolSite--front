import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loop from '../img/Wloop.png'



const NewsItem = ({props}) => {
  return (
    <Link to={`news${props._id}`}>
      <div className='newsItem'>
        <div className="newsItemContent">
            <div className="newsImgBlock">
                <div >
                  <img src={props.imageUrl} className="imgN"/>
                </div>
            </div>
            <div className="titleNewsItem">
                {props.title}
            </div>
            <div className="moreInfo">

            </div>
        </div>
    </div>
    </Link>
  )
}

export default NewsItem