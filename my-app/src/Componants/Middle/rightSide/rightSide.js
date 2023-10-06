import React from 'react'
import './rightside.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeselect, informationboxvisibility } from '../../../store/Slicer'

export default function RightSide() {
  const completeState = useSelector((state) => state.state.completedtasks)
  
  return (
      <section className='rightsideLayout'>
        <p className='Title'>completed Tasks</p>
      {
        completeState.map((task) =>(
          <div className='taskbox' >
            <div className='RedPoint'></div>

            <p>{task.title}</p>
          </div>
        ))
      }
   
     
    </section>
  )
}
