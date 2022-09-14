import React, { useState } from 'react';
import Header from './components/Header';
import Speach from './components/Speach';
import Slider from './components/UI/slider/Slider';
import "./styles/App.css";
import News from './components/News';
import Contacts from './components/Contacts';
import Main from './Page/Main';
import { BrowserRouter as Router, Routes, Route, Link,} from 'react-router-dom';
import Class from './Page/Class';
import About_1 from './Page/about/About_1';
import About_2 from './Page/about/About_2';
import About_3 from './Page/about/About_3';
import About_4 from './Page/about/About_4';
import About_5 from './Page/about/About_5';
import About_6 from './Page/about/About_6';

import Parents_1 from './Page/parents/Parents_1';
import Parents_2 from './Page/parents/Parents_2';
import Parents_3 from './Page/parents/Parents_3';
import Parents_4 from './Page/parents/Parents_4';
import Parents_5 from './Page/parents/Parents_5';

import Students_1 from './Page/students/Students_1';
import Students_2 from './Page/students/Students_2';
import Students_3 from './Page/students/Students_3';
import Students_4 from './Page/students/Students_4';
import Students_5 from './Page/students/Students_5';
import Students_6 from './Page/students/Students_6';

import Teachers from './Page/teachers/Teachers';
import Footer from './components/Footer';
import Menu from './components/UI/Menu/Menu';
import NewsOpenPage from './components/UI/News/NewsOpenPage'
import  Admin  from './Page/Admin';
import AdminA from './Page/AdminA';
const App = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [{value:"О нас", link:"/about", puncts: ['Общая информация', "Педагогический состав", "Отзывы", "Новости", "Общественная жизнь", "Фото и видео"], id: 1},
                 {value:"Родителям", link:"/parents", puncts: ['Алгоритм поступления', "Свободные места", "Дошкольное образование", "Вопрос-ответ", "Питание"], id: 2},
                 {value:"Учащимся", link:"/students", puncts: ['Расписание, учебные периоды, каникулы', "Государственная итоговая аттестация", "Олимпиады, конкурсы и конференции", "Новости", "Общественная жизнь", "Фото и видео"], id: 3},
                 {value:"Учителям", link:"/teachers", puncts: ['Общая информация', "Педагогический состав", "Отзывы", "Новости", "Общественная жизнь", "Фото и видео"], id: 4},
                 {value:"Классы", link:"/class", puncts: ['1 класс', "2 класс", "3 класс", "4 класс", "5 класс", "6 класс", '7 класс', "8 класс", "9 класс", "10 класс", "11 класс"], id: 5},
  ]
    return (  
      <Router>
        <div className="App">
          <Header active={menuActive} setActive={setMenuActive}/>
          <Menu header={'Меню сайта'} items={items} active={menuActive} setActive={setMenuActive}/>
          <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='*' element={<Main/>}/>

              <Route path='/about1' element={<About_1/>}/>
              <Route path='/about2' element={<About_2/>}/>
              <Route path='/about3' element={<About_3/>}/>
              <Route path='/about4' element={<About_4/>}/>
              <Route path='/about5' element={<About_5/>}/>
              <Route path='/about6' element={<About_6/>}/>

              <Route path='/parents1' element={<Parents_1/>}/>
              <Route path='/parents2' element={<Parents_2/>}/>
              <Route path='/parents3' element={<Parents_3/>}/>
              <Route path='/parents4' element={<Parents_4/>}/>
              <Route path='/parents5' element={<Parents_5/>}/>


              <Route path='/students1' element={<Students_1/>}/>
              <Route path='/students2' element={<Students_2/>}/>
              <Route path='/students3' element={<Students_3/>}/>
              <Route path='/students4' element={<Students_4/>}/>
              <Route path='/students5' element={<Students_5/>}/>
              <Route path='/students6' element={<Students_6/>}/>

              <Route path='/teachers' element={<Teachers/>}/>
              <Route path='/class' element={<Class/>}/>

              <Route path='/news:id' element={<NewsOpenPage/>}/>

              <Route path='/admin' element={<Admin/>}/>
              <Route path='/adminA' element={<AdminA/>}/>
          </Routes>
          <Footer/>
        </div>
      </Router>
     );
}
 
export default App;

