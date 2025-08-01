import {createSlice} from "@reduxjs/toolkit";

const initialState: {ids: string[]} = {
  ids: []
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: ({ids}, {payload}: {payload: {id: string}}) => {
      ids.push(payload.id)
    },
    removeFavorite: ({ids}, {payload}: {payload: {id: string}}) => {
      ids.splice(ids.indexOf(payload.id), 1)
    }
  }
})

export const {addFavorite, removeFavorite} = favoritesSlice.actions
export default favoritesSlice.reducer