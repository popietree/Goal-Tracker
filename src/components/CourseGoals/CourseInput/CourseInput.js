import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import classes from "./CourseInput.module.css";
// import styled from "styled-components";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setValid(false);

      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  const [isValid, setValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setValid(true);
    }
    setEnteredValue(event.target.value);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${classes["form-control"]} ${!isValid && classes.invalid}`}
      >
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

//componet only used in this component

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "#8b005d" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "#8b005d" : "#ccc")};
//     background-color: ${(props) => (props.invalid ? "rgb(221, 137, 137)" : "")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     // background: #fad0ec;
//     // border-color: ${(props) => (props.invalid ? "#fad0ec" : "transparent")} ;
//   }

//   // &.invalid input {
//   //   border-color: black;
//   //   background-color: rgb(221, 137, 137);
//   // }

//   // &.invalid label {
//   //   color: red;
//   // }
// `;
