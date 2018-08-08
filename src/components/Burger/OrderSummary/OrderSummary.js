import React from "react";
import Aux from "../../../hoc/Aux";

const orderSummary = (props) => {
    const ingridientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <strong style={{ textTransform: 'capitalize' }}>{igKey}</strong>: {props.ingredients[igKey]}
                </li>);
        });
    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingridients:</p>
            <ul>
                {ingridientsSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    );
};

export default orderSummary;