import React from 'react'
import './Headeroptions.css'
import { Avatar } from '@mui/material'
function Headeroptions({avatar,Icon,name}) {
  return (
    <div className='headeroptions'>
      {Icon && <Icon className="headericons" />}
      {avatar &&<Avatar className="headeroption_icon" src={avatar}/>}
          <p>{name}</p>
    </div>
  )
}

export default Headeroptions
