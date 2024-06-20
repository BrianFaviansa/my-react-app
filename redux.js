import { createStore } from "redux";

// * reducer

const CartReducer = (
  state = {
    cart: [{ id: 1, qty: 10 }],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// * store

const store = createStore(CartReducer);
console.log("oncreate store : ", store.getState());

// * subcribe

store.subscribe(() => {
  console.log("onchange store : ", store.getState());
});

// * dispatch

const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 20 } };
store.dispatch(action1);
const action2 = { type: "ADD_TO_CART", payload: { id: 3, qty: 5 } };
store.dispatch(action2);
