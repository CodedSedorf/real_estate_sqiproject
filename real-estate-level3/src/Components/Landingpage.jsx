import React from 'react'
import Barnner from './Barnner'
import Residencies from './Residencies'
import Values from './Values'
import Contactus from './Contactus'
import Getstarted from './Getstarted'

const Landingpage = () => {
  return (
    <div className='mt-10'>
        <Barnner/>
        <Residencies/>
        <Values/>
        <Contactus/>
        <Getstarted/>
    </div>
  )
}

export default Landingpage