import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './DetailsWindow.css'
import { deltask, informationboxvisibility } from '../../../store/Slicer'
export default function DetailsWindow() {
    const visibilityState = useSelector((state) => state.state.informationbox)
    const incompleteState = useSelector((state) => state.state.incomplete)
    const SelectedId = useSelector((state) => state.state.selectedid)
    const dispatch = useDispatch()

    
    const style_ = {
        'visibility': visibilityState
    }

    const delTask = (id) => {
        const newArr =[]
        incompleteState.map((item)=>{
            if(item.id!=id){
                newArr.push(item)

            }
        })
        dispatch(deltask({ newarr:newArr }))
       

    }


    return (
        <section className='WindowLayout' style={style_}>
            <p className=''>task</p>
            {
                incompleteState.filter((task) => task.id == SelectedId).map((task) =>(
                    <>
                        <div placeholder='Description' className='descId'><p>{task.desc}</p></div>
                        <div className='DelBtm' onClick={() => delTask(task.id)}>delete</div>
                       
                    </>
                ))
            }
            <div className='DelBtm' onClick={() => dispatch(informationboxvisibility())}>close</div>
        </section>
    )
}
