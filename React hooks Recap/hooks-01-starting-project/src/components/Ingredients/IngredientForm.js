import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";
import LoadingIndicator from "../UI/LoadingIndicator";
const IngredientForm = React.memo((props) => {
  const [titleState, setTitleState] = useState("");
  const [amountState, setAmountState] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngredient({ title: titleState, amount: amountState });
  };
  const TitleState = (e) => {
    setTitleState(e);
  };
  const AmountState = (e) => {
    setAmountState(e);
  };
  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={titleState}
              onChange={(event) => {
                TitleState(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={amountState}
              onChange={(event) => {
                AmountState(event.target.value);
              }}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading ? <LoadingIndicator></LoadingIndicator> : null}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
