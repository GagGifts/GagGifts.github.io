import React from 'react'
import StripeCheckOut from 'react-stripe-checkout'

const StripeCheckoutButton =({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_3fOSbf0NjjdcRxCI8ZXenquk00zQNOlcVE';

    const onToken = token => {
        console.log(token);
        alert('payment successful')
    }

    return (
        <StripeCheckOut
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image=''
            description={`your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;