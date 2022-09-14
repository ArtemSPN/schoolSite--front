import React from 'react';
import Speach from '../components/Speach';
import Slider from '../components/UI/slider/Slider';
import News from '../components/News';
import Contacts from '../components/Contacts';
import Menu from '../components/UI/Menu/Menu';
import { useState } from 'react';

const Main = () => { 
  return (
    <div className="App">
        <Speach/>
        <Slider/>
        <News/>
        <Contacts/>
    </div>
  )
}

export default Main