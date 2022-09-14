import axios from '../../../axios';
import React from 'react';
import { useParams } from 'react-router-dom';


const NewsOpenPage = ({props}) => {
  const [data, setData] = React.useState()
  const {id} = useParams();
  console.log(`${id}`)
  console.log(`/news/${id}`)
  React.useEffect(() => {
    axios.get(`/news/${id}`).then(res => {
      setData(res.data)
    }).catch(err => {
      console.warn(err);
    })
  }, [])
  
  console.log(data)
  if(data){
    return (
      <div className='container'>
            <div className="about_page">
                <div className="header_about_page">
                  <div className="path">новости {'>'} {data.title}</div>
                  <div className="title_page">{data.title}</div>
                  <div className="about_content1">
                      <div className="newsOpenImg">
                        <img src={data.imageUrl} alt="" className='imgForAbout1' width='100%' aligh="left"/>
                      </div>
                      <div className="newsOpenContent">{data.text}</div>   
                  </div>
                </div>
            </div>
      </div>
    )
  }
}

export default NewsOpenPage