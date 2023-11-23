import { createSlice } from "@reduxjs/toolkit";


const PAYMENT_INITIAL_STATE = {
    paymentFormToggle: false,
}
export const paymentFormSlice = createSlice({
    name: 'payment',
    initialState: PAYMENT_INITIAL_STATE,
    reducers: {
        setPaymentFormToggle: (state, action) => {
            state.paymentFormToggle = action.payload
        }
    }
    
})

export const paymentReducer = paymentFormSlice.reducer
export const {setPaymentFormToggle} = paymentFormSlice.actions
export const selectPaymentFormToggle = (state) => state.payment.paymentFormToggle