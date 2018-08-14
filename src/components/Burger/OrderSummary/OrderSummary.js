import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] Inside in componentWillUpdate');
    }
    render() {
    const ingridientsSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <strong style={{ textTransform: 'capitalize' }}>{igKey}</strong>: {this.props.ingredients[igKey]}
                </li>);
        });
        return (
            <Aux>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingridients:</p>
                <ul>
                    {ingridientsSummary}
                </ul>
                <p><strong>Total price: {this.props.total}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
};

export default OrderSummary;