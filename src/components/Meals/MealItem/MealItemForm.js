import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [AmountisValid, setAmountisValid] = useState(true);
  const amountInputRef = useRef();

  const SubmitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber > 10 ||
      enteredAmountNumber < 1
    ) {
      setAmountisValid(false);
      return;
    }

    props.onAddtoCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <Input
        ref={amountInputRef}
        label="Quantity"
        input={{
          id: "amount",
          type: "number",
          min: "0",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!AmountisValid ? <p>Please enter a valid amount.(1-10)</p> : null}
    </form>
  );
};

export default MealItemForm;
