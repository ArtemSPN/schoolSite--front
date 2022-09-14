import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewsItem from './NewsItem';
import axios from '../axios';
import TitleSiteBlock from './TitleSiteBlock';
import NewsOpenPage from './UI/News/NewsOpenPage';
import { fetchPosts } from '../redux/slices/posts';

const  News = () => {
    const dispatch = useDispatch();
    const {posts, slides} = useSelector(state => state.posts)
    useEffect(() =>{
        dispatch(fetchPosts());
    }, []);

    const [newsItem, setNewsItem] = useState([
        {title: "Скоро 1 сентября", url: `/imgForSlider/${1}.jpg`, moreInfo: "1 сентября в России отмечается День знаний. Ежегодно 1 сентября в России отмечается День знаний. Этот день также является официальным праздником в некоторых других постсоветских государствах. Истоки праздника связывают с пришедшим из Византии в Россию в XV веке обычаем отмечать наступление нового календарного года в первый день осени.", id: 1},
        {title: "Выпуск 2021", url: `/imgForSlider/${2}.jpg`, moreInfo: "", id: 2},
        {title: "Выпуск 2022", url: `/imgForSlider/${3}.jpg`, moreInfo: "Выпускники СОШ № 2 - активные, творческие и спортивные, умные и целеустремленные, дружные и веселые. Среди них 3 претендентки на получение аттестата о среднем общем образовании с отличием и медали «За особые успехи в учении»: Алина Борясова, Дарья Кирикова, Анна Теселкина. Под руководством классного руководителя Н.А. Косенковой ребята активно принимали участие и становились победителями в различных конкурсах, олимпиадах, научно практических конференциях, социально значимых проектах. Каждый из выпускников внес огромный вклад в жизнь школы и класса. У девушек и юношей большие планы и светлые мечты, и пусть все они осуществятся во взрослой жизни! Выпускники СОШ № 2 - активные, творческие и спортивные, умные и целеустремленные, дружные и веселые. Среди них 3 претендентки на получение аттестата о среднем общем образовании с отличием и медали «За особые успехи в учении»: Алина Борясова, Дарья Кирикова, Анна Теселкина. Под руководством классного руководителя Н.А. Косенковой ребята активно принимали участие и становились победителями в различных конкурсах, олимпиадах, научно практических конференциях, социально значимых проектах. Каждый из выпускников внес огромный вклад в жизнь школы и класса. У девушек и юношей большие планы и светлые мечты, и пусть все они осуществятся во взрослой жизни!", id: 3},
        {title: "День Победы", url: `/imgForSlider/${5}.jpg`, moreInfo: "", id: 4},
        {title: "День Победы", url: `/imgForSlider/${5}.jpg`, moreInfo: "", id: 5},
        {title: "День Победы", url: `/imgForSlider/${5}.jpg`, moreInfo: "", id: 6}
    ]);
   
    let postItems = posts.items.posts;
    let slideItems = posts.items.slider;
    console.log(slideItems);
    console.log(postItems);
    const diapos = postItems?postItems.length - 6:0;

    return (
        <div className='container'>
            <div className="News">
                <TitleSiteBlock title='Новости'/>
                <div className="Nc">
                    {postItems?postItems.map((post, index) =>
                        index >= diapos?<NewsItem props={post} key={post.id}/>:console.log('old post')
                    ):
                        console.log("error show posts")
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default News