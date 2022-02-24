import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
  name: "root",
  initialState: {
    firstname: "",
    lastname: "",
    age: "",
    yearsOfExp: "",
    cheese: "no_cheese",
    sauce: "no_sauce"
  },
  reducers: {
    enterFirstname: (state, action) => { state.firstname = action.payload },
    enterLastname: (state, action) => { state.lastname = action.payload },
    enterAge: (state, action) => { state.age = action.payload },
    enteryOE: (state, action) => { state.yearsOfExp = action.payload },
    chooseCheese: (state, action) => { state.cheese = action.payload },
    chooseSauce: (state, action) => { state.sauce = action.payload }
  }
})

export const reducer = rootSlice.reducer;

export const { enterFirstname, enterLastname, enterAge, enteryOE, chooseCheese, chooseSauce } = rootSlice.actions