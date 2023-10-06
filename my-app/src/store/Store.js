import { configureStore } from '@reduxjs/toolkit'
import StateSlicer from './Slicer'

export const store = configureStore({
    reducer: {
        state: StateSlicer,

    },
})