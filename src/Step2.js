import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { enterAge, enteryOE } from "./rootSlice";

export const Step2 = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const age = useSelector(state => state.age);
  const yearsOfExp = useSelector(state => state.yearsOfExp);
  const { register, handleSubmit } = useForm({defaultValues: {age, yearsOfExp}});

  const onSubmit = (data) => {
    dispatch(enterAge(data.age));
    dispatch(enteryOE(data.yearsOfExp));
    history.push("./step3");
  };

  const onPrevious = () => {
    history.push("/");
  }

  return (
    <>
     <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 2</h2>
      <label>
        Age:
        <input  id="age" type="text" name="age" ref={register}/>
      </label>
      <label>
        Years of experience:
        <input  id="yearsOfExp" type="text" name="yearsOfExp" ref={register} />
      </label>
      <button type="submit">Next</button>
    </form>
    <button onClick={onPrevious} type="button">Previous</button> 
    </>
  );
};