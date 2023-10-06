import React, { useState } from 'react'
import './LeftSide.css'
import { useDispatch, useSelector } from 'react-redux'
import { addtocomplete, changeselect, deltask, informationboxvisibility } from '../../../store/Slicer'


export default function LeftSide() {
    const incompleteState = useSelector((state) => state.state.incomplete)
    const dispatch = useDispatch()
    const openWindow=(Id)=>{
        dispatch(informationboxvisibility())
        dispatch(changeselect(`${Id}` ))
    }
    const delTask = (id) => {
        const newArr = []
        incompleteState.map((item) => {
            if (item.id != id) {
                newArr.push(item)

            }
        })
        dispatch(deltask({ newarr: newArr }))


    }
    const AddtoComplete=(item)=>{
        dispatch(addtocomplete(item))
        delTask(item.id)

    }
  return (
      <section className='LeftSideLayout'>
          <p className='Title'>In process Tasks</p>
          {
            incompleteState.map((task) =>(
                <div className='taskbox' >
                    <input type='checkbox'  onChange={() =>{
                    
                            AddtoComplete(task)
             
                    }
                       
                         }
                        
                         
                         ></input>
                    <p onClick={() => {
                        openWindow(task.id)
                    }}>{task.title}</p>
                </div>
            ))
          }
        
          

      </section>
  )
}
