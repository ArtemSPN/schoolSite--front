import React from 'react';
import { useState } from 'react';
import ContactsItem from './ContactsItem';
import Footer from './Footer';
import TitleSiteBlock from './TitleSiteBlock';

const Contacts = () => {

    const [contactPerson, SetContactPerson] = useState([
        {rang: "Директор, учитель физики", name: `Дмитриенко Илья Юрьевич`, tel: "+79678****76", mail:"leskin-artem@mail.ru", id: 1},
        {rang: "Зам. директора, Учитель", name: `Бардеева Наталья Николаевна`, tel: "+79678****76", mail:"leskin-artem@mail.ru", id: 2},
        {rang: "Зам. директора, Учитель", name: `Желудкова Лариса Владимировна`, tel: "+79678****76", mail:"leskin-artem@mail.ru", id: 3},
        {rang: "Зам. директора, Учитель", name: `Шахвердова Светлана Юрьевна`, tel: "+79678***76", mail:"leskin-artem@mail.ru", id: 4},
        {rang: "Зам. директора, Учитель", name: `Шахвердова Светлана Юрьевна`, tel: "+79678****76", mail:"leskin-artem@mail.ru", id: 5}
    ]) 

  return (
    <div className='contactsWrap'>
        <div className="container con">
            <a name="contact"><TitleSiteBlock title='Контактные данные'/></a>
            <div className="Contacts">
                {contactPerson.map((contactsI) =>
                    <ContactsItem props={contactsI} key={contactsI.id}/>
                )}
            </div>
        </div>
    </div>
  )
}

export default Contacts