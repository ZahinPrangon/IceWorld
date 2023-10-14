/* eslint-disable prettier/prettier */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
import { createSelector, createSlice } from "@reduxjs/toolkit";

import type { RootState } from ".";

export interface CartSlice {
  isLoading?: boolean;
  currentProduct?: any;
  selectedProducts: Record<string, SelectedProduct>;
  isCartOpen?: boolean;
  isMenuOpen?: boolean;
  currentView?: any;
}

type SelectedProduct = {
  product: any;
  quantity: number;
  isMenuOpen?: boolean;
};

// const getSelectedProductsOnInit = () => {
//   if (typeof window === "undefined") return {};
//   if (localStorage.getItem("cart") === "") return {};
//   return JSON.parse(localStorage.getItem("cart") as string) || {};
// };

const initialState: CartSlice = {
  selectedProducts: {},
  // selectedProducts: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateProduct: (state, action) => {
      if (!state.selectedProducts[action.payload.productId]) return;
      const product = state.selectedProducts[action.payload.productId]?.product;
      if (!product) return;
      if (action.payload.updateType === "INC") {
        if (state.selectedProducts[product.id] !== undefined) {
          state.selectedProducts[product.id]!.quantity += 1;
        }
      } else if (state.selectedProducts[product.id] !== undefined) {
        state.selectedProducts[product.id]!.quantity -= 1;
      }
    },
    addToCart: (state, action) => {
      const { selectedProduct } = action.payload;
      if (!selectedProduct) return;
      if (state.selectedProducts[selectedProduct.id]) {
        state.selectedProducts[selectedProduct.id]!.quantity += 1;
        return;
      }
      state.selectedProducts[action.payload.selectedProduct.id] = {
        product: action.payload.selectedProduct,
        quantity: 1,
      };
    },
    setSelectedProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
    clearCart: (state) => {
      state.selectedProducts = {};
      // localStorage.removeItem("cart");
    },
    removeProduct: (state, action) => {
      delete state.selectedProducts[action.payload.productId];
    },
    onOpenCart: (state) => {
      state.isCartOpen = true;
    },
    onCloseCart: (state) => {
      state.isCartOpen = false;
    },
    onOpenMenu: (state) => {
      state.isMenuOpen = true;
    },
    onCloseMenu: (state) => {
      state.isMenuOpen = false;
    },
    updateCur: (state, action) => {
      state.currentView = action.payload;
    },
  },
});

const getSelectedProducts = (state: RootState) => state.cart.selectedProducts;

const calculateTotalPrice = createSelector(
  [getSelectedProducts],
  (selectedProducts) => {
    let totalPrice = 0;

    for (const [productId, selectedProduct] of Object.entries(
      selectedProducts
    )) {
      if (Object.prototype.hasOwnProperty.call(selectedProducts, productId)) {
        if (selectedProduct && selectedProduct.product) {
          totalPrice +=
            selectedProduct.product.price * selectedProduct.quantity;
        }
      }
    }

    return totalPrice;
  }
);

const calculateTotalQuantity = createSelector(
  [getSelectedProducts],
  (selectedProducts) => {
    let totalQuantity = 0;
    for (const [productId, selectedProduct] of Object.entries(
      selectedProducts
    )) {
      if (Object.prototype.hasOwnProperty.call(selectedProducts, productId)) {
        if (selectedProduct && selectedProduct.product) {
          totalQuantity += selectedProduct.quantity;
        }
      }
    }

    return totalQuantity;
  }
);

export const cartSelectors = {
  getSelectedProducts,
  calculateTotalPrice,
  calculateTotalQuantity,
};
// Action creators are generated for each case reducer function
export const {
  updateProduct,
  addToCart,
  removeProduct,
  onOpenCart,
  onCloseCart,
  onOpenMenu,
  onCloseMenu,
  clearCart,
  updateCur,
} = cartSlice.actions;

export default cartSlice.reducer;
