import { createContext, useContext, useReducer } from "react";
import { cart } from "../mocks";

const CartContext = createContext();

const INIT_STATE = {
  products: cart,
  countCart: cart.length,
  totalPrice: cart.reduce((acc, cur) => {
    return acc + cur.price * (1 - cur.discount) * cur.quantity;
  }, 0),
};

const REDUCER_FN = (state, action) => {
  switch (action.type) {
    case "SET_CART": {
      const products = action.payload.products;
      const countCart = action.payload.countCart;
      const totalPrice = products.reduce((acc, cur) => {
        return acc + cur.price * (1 - cur.discount) * cur.quantity;
      }, 0);
      return {
        products,
        countCart,
        totalPrice,
      };
    }
    case "ADD_CART": {
      const product = action.payload.product;
      const newProducts = JSON.parse(JSON.stringify(state.products));
      const idx = newProducts.findIndex((item) => item.id === product.id);
      if (idx > -1) {
        newProducts[idx] = { ...newProducts[idx], quantity: newProducts[idx].quantity + product.quantity };
      } else {
        newProducts.push(product);
      }
      const totalPrice = newProducts.reduce((acc, cur) => {
        return acc + cur.price * (1 - cur.discount) * cur.quantity;
      }, 0);
      return { products: newProducts, countCart: newProducts.length, totalPrice };
    }
    case "UPDATE_CART": {
      const product = action.payload.product;
      const productId = action.payload.productId;
      const newProducts = JSON.parse(JSON.stringify(state.products));
      const idx = newProducts.findIndex((item) => item.id === productId);
      if (idx !== -1) {
        newProducts[idx] = product;
      }
      const totalPrice = newProducts.reduce((acc, cur) => {
        return acc + cur.price * (1 - cur.discount) * cur.quantity;
      }, 0);
      return { products: newProducts, countCart: newProducts.length, totalPrice };
    }
    case "DELETE_CART": {
      const productId = action.payload.productId;
      const newProducts = JSON.parse(JSON.stringify(state.products)).filter((item) => item.id !== productId);
      const totalPrice = newProducts.reduce((acc, cur) => {
        return acc + cur.price * (1 - cur.discount) * cur.quantity;
      }, 0);
      return { products: newProducts, countCart: newProducts.length, totalPrice };
    }
    case "INIT_CART": {
      return {
        products: [],
        countCart: 0,
        totalPrice: 0,
      };
    }
    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(REDUCER_FN, INIT_STATE);

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must use in CartContextProvider!!");
  }

  return context;
};

export { useCartContext, CartContextProvider };
