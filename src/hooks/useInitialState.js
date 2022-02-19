import { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        const payloadExist=state.cart.filter((item) => item.id == payload.id);
        if(payloadExist.length==0){
            setState({
                ...state,
               cart: [...state.cart, payload]
            });
        }
    };

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(
                (item) => item.id != payload.id),
        });
    };

    return {
        state,
        addToCart,
        removeFromCart
    }

}

export default useInitialState;