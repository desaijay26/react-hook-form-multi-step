import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { enterFirstname, enterLastname } from './rootSlice'

export const Step1 = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const firstname = useSelector(state => state.firstname)
  const lastname = useSelector(state => state.lastname)
  const { register, handleSubmit } = useForm({ defaultValues: { firstname, lastname } })

  const onSubmit = (data) => {
    dispatch(enterFirstname(data.firstname))
    dispatch(enterLastname(data.lastname))
    history.push("./step2")
  } 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 1</h2>
      <label>
        First Name:
        <input  id="firstname" type="text" name="firstname" ref={register}/>
      </label>
      <label>
        Last Name:
        <input  id="lastname" type="text" name="lastname" ref={register}/>
      </label>
      <button type="submit">Next</button>
    </form>
  )
}