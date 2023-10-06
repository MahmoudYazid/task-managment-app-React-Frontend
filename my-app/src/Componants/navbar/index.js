import React from 'react'
import './navbar.css'

import Window from './AddtasksWindow/window'
import { useDispatch } from 'react-redux'
import { navbarboxvisibility } from '../../store/Slicer'

export default function NavBar() {
    const dispatch = useDispatch()
    const changeWindowVisibility=()=>{
        dispatch(navbarboxvisibility())
    }
  return (
    <>
      <section className='navbarMainLayout'>
        <a className='Logo' href='https://www.linkedin.com/in/mahmoudyazid/'>
          <p>made by mahmoud abuelyazid</p>
        </a>
              <div className='AddBtmNavBar' onClick={() => changeWindowVisibility()}>
            <p>+</p>
        </div>
      
      
    </section>
          <Window></Window>
      </>
  )
}
