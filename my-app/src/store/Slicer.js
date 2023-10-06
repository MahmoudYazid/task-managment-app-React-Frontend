import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    navbarbox: 'hidden',
    incomplete: [],
    completedtasks: [],
    informationbox: 'hidden',
    selectedid: '',
}

export const StateSlicer = createSlice({
    name: 'State',
    initialState,
    reducers: {
        navbarboxvisibility: (state) => {
         
            if(state.navbarbox == 'hidden') {
                state.navbarbox = 'visible' 
            }else{
                state.navbarbox = 'hidden'            
            } 
        },
        informationboxvisibility: (state) => {
            if (state.informationbox == 'hidden') {
                state.informationbox = 'visible'
            } else {
                state.informationbox = 'hidden'
            }
        },
        addtask: (state,input) => {
            state.incomplete.push({
                id: `${state.incomplete.length + 1}`,
                title: input.payload.title,
                desc: input.payload.desc,
            })
        },

        changeselect: (state, input) => {
            state.selectedid =`${input.payload}`
        },
        deltask:(state,newarr)=>{
              
            state.incomplete = newarr.payload.newarr
              
            
            
        },
        addtocomplete: (state, newarr) => {

            state.completedtasks.push(newarr.payload) 



        },
    },
})

// Action creators are generated for each case reducer function
export const { navbarboxvisibility, addtask, informationboxvisibility, changeselect, deltask, addtocomplete } = StateSlicer.actions

export default StateSlicer.reducer