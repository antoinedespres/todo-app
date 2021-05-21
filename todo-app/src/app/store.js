// import { configureStore } from '@reduxjs/toolkit';
import { createStore } from "redux";
import { ADD_ITEMS, TOGGLE_DONE } from "./action.js";

let itemId = 0;

const store = createStore(function (state, action) {
  //console.log("state ", state);
  //console.log(state?.items || []);
  switch (action.type) {
    case ADD_ITEMS:
      return {
        ...state,
        items: [...(state?.items || []), itemId],
        contentById: {
          ...state?.contentById || {},
          [itemId++]: {
            value: action.value,
            done: false
          }
        }
      };
    case TOGGLE_DONE:
      return {
        ...state,
        items: state?.items || [],
        contentById: {
          ...state?.contentById || {},
          [action.itemId]: {
            ...state?.contentById[action.itemId],
            done: !action.done
          }
        }
      };
    default:
      console.log("Invalid action:", action);
      return state;
  }
});

export default store;