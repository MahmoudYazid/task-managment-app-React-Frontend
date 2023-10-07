import React from 'react'
import LeftSide from './LeftSide/LeftSide'
import './middlemain.css'
import RightSide from './rightSide/rightSide'
import DetailsWindow from './DetailsWindow/DetailsWindow'
export default function middleMain() {
  return (
    <>
      <section className='middlemainLayout'>
          <LeftSide></LeftSide>
          <RightSide></RightSide>
    </section>
      <DetailsWindow></DetailsWindow>
    </>
  )
}
