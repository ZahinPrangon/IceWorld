import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart.slice";
import reviewReducer from "./reviews.slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    review: reviewReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
