import React from 'react'
import Notify from './Notify'
import SocialSearh from './SocialSearh'
import TitleBlock from './TitleBlock'
import Nav from './Nav'

const Header = ({active, setActive}) => {
  return (
    <div className='header'>
      <SocialSearh active={active} setActive={setActive}/>
      <Notify/>
      <TitleBlock/>
      <Nav/>
    </div>
  )
}

export default Header