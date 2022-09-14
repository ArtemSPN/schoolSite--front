import React from 'react';

const ContactsItem = ({props}) => {
  return (
    <div className='contactsItem'>
        <div className="rang">{props.rang}</div>
        <div className="Name">{props.name}</div>
        <div className="telNunCon">{props.tel}</div>
        <div className="mail">{props.mail}</div>

    </div>
  )
}

export default ContactsItem