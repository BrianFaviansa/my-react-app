import { createContext, useContext, useReducer } from "react";

const totalPriceContext = createContext(null);
const totalPriceDispatchContext = createContext(null);

const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      return {
        total: action.payload.total,
      };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export function TotalPriceProvider({ children }) {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });

  return (
    <totalPriceContext.Provider value={totalPrice}>
      <totalPriceDispatchContext.Provider value={dispatch}>
        {children}
      </totalPriceDispatchContext.Provider>
    </totalPriceContext.Provider>
  );
}

export function useTotalPrice() {
  const context = useContext(totalPriceContext);
  if (context === null) {
    throw new Error("useTotalPrice must be used within a totalPriceProvider");
  }
  return context;
}

export function useTotalPriceDispatch() {
  const context = useContext(totalPriceDispatchContext);
  if (context === null) {
    throw new Error(
      "useTotalPriceDispatch must be used within a totalPriceProvider"
    );
  }
  return context;
}
