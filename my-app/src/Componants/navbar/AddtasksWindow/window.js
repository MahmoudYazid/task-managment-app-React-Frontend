import React, { useRef } from 'react'
import './window.css'
import { useSelector,useDispatch } from 'react-redux'
import { addtask } from '../../../store/Slicer'
export default function SideWindowComponent() {
    const visibilityState = useSelector((state) => state.state.navbarbox)
    const incompleteState = useSelector((state) => state.state.incomplete)
    const dispatch = useDispatch()

    const titleRef=useRef()
    const descRef = useRef()
    
     const style_={
         'visibility': visibilityState
     }

     const addTask=()=>{

         dispatch(addtask({
             title: titleRef.current.value,
             desc: descRef.current.value,
         }))

     }
  return (
      <section className='WindowLayout' style={style_}>
        <p className=''>add tasks</p>
          <input ref={titleRef} placeholder='Task name' className='title'></input>
          <textarea ref={descRef} placeholder='Description' className='desc'></textarea>
          <div className='EnterBtm' onClick={()=>addTask()}>Enter</div>
    </section>
  )
}
