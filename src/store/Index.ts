import Storage, { PersistanceKeys } from "../utils/storage";
import {
  Actions,
  AppState,
  Observer,
  petCardActions,
  getDataActions,
} from "../types/Store";
import { reducer } from "./Reducer";
import { Screens } from "../types/Navigation";
import { petProduct } from "../types/PetProduct";
import { Firestore } from "firebase/firestore";

const emptyState: AppState = {
  screen: Screens.REGISTERLAST,
  pets: [],
  community: [],
  myprofiledata: [],
};

// export let appState = Storage.get<AppState>({
//   key: PersistanceKeys.STORE,
//   defaultValue: emptyState,
// });
export let appState = emptyState;

let observers: Observer[] = [];

// const persistStore = (state: AppState) =>
//   Storage.set({ key: PersistanceKeys.STORE, value: state });

const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: Actions) => {
  const clone = JSON.parse(JSON.stringify(appState));
  const newState = reducer(action, clone);
  appState = newState;

  // persistStore(newState);Z
  notifyObservers();
};

export const addObserver = (ref: Observer) => {
  observers = [...observers, ref];
};

console.log(appState);
