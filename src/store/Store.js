import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
const slice = createSlice({
    name: 'store',
    initialState: { item: [], name: 'food' },
    reducers: {
        addrecipe(state, actions) {
            state.item = actions.payload
        }
    }
})
const store = configureStore({
    reducer: slice.reducer
})
export const Slicdata = slice.actions
export default store