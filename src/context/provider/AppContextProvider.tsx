import { useReducer } from "react";
import { AppContext } from "@/context/createContext";

import { CartItem, AppState } from "@/interface/index";
import { appReducer } from "@/context/reducer/appReducer";
import { ProviderProps } from "@/interface/type";

const INITIAL_STATE: AppState = {
  cart: [],
  subTotal: 0,
  wpPosts: [],
  wpCategories: [],
};

export const AppContextProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

  const addToCart = (item: CartItem) => {
    return dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const updateSubTotal = (total: number) => {
    return dispatch({ type: "UPDATE_SUBTOTAL", payload: total });
  };

  const addCategory = (item: any) => {
    dispatch({ type: "ADD_CATEGORY", payload: item });
  };

  const addPosts = (item: any) => {
    dispatch({ type: "ADD_POSTS", payload: item });
  };

  const removeFromCart = (index: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: index });
  };

  const providerValue = {
    state,
    updateSubTotal,
    addToCart,
    removeFromCart,
    addCategory,
    addPosts,
  };
  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};
