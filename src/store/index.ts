import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { githubApi } from "./github/github.api";
import { githubReducer } from "./github/github.slice";

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    github: githubReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});

// for  setup refetchOnFocus: true (in useSearchUsersQuery && createApi)
setupListeners(store.dispatch);

// created the custom types for better understanding the store types
export type RootState = ReturnType<typeof store.getState>;
