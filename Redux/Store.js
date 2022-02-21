import { createStore } from "redux";
import { FavoriteReducer } from "./Reducers/FavoritesReducer";

export const store = createStore(FavoriteReducer);
