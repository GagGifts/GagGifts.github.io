import { createSelector } from 'reselect'

export const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems 
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce((accumulated, cartItem)  => 
            accumulated + cartItem.quantity, 0)
);

export const selectCartItemsTotal = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce((accumulated, cartItem)  => 
            accumulated + cartItem.quantity * cartItem.price, 0)
)