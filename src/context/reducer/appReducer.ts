import { CartItem, AppState } from '@/interface/index'

type CartAction ={ type: 'UPDATE_SUBTOTAL', payload: any } | { type: 'ADD_CATEGORY', payload: any } | { type: 'ADD_POSTS', payload: any } | { type: 'ADD_TO_CART', payload: CartItem } | { type: 'REMOVE_FROM_CART', payload: number };

function checkCategory(arr: any, newItem: any): boolean {

    const found = arr.some((el: { id: number, variants: number }) => el.id === newItem.id && el.variants === newItem.variants);
    if (found) {
        return true;
    } else {
        return false;
    }
}

export const appReducer = (state: AppState, action: CartAction): AppState => {
    switch (action.type) {
        case "ADD_TO_CART":
            if (checkCategory(state.cart, action.payload)) {
                return {
                    ...state,
                    cart: [
                        ...state.cart.map((item: CartItem) => {
                            if (item.id === Number(action.payload.id) && item.variants === action.payload.variants) {
                                item.qty = action.payload.qty;
                                return item;
                            } else {
                                return item;
                            }
                        }),
                    ],
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, action.payload],
                };
            }
        case "ADD_CATEGORY":
            return {
                ...state,
                wpCategories: [...action.payload],
            };
        case "UPDATE_SUBTOTAL":
            return {
                ...state,
                subTotal: state.subTotal + action.payload,
            };
        case "ADD_POSTS":
            return {
                ...state,
                wpPosts: [...action.payload],
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((item: CartItem, index: number) => {
                    return index !== action.payload;
                }),
            };
        default:
            return state;
    }
}