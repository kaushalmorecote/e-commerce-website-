// setup data layer
// we need this to track the basket
 
import React, { createContext, useContext, useReducer } from "react";

//this is the data layer
export const StateContext = createContext();
//data layer that passing info to the basket

//BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
 <StateContext.Provider value={useReducer(reducer, initialState)}>
 {children}
 </StateContext.Provider>    
);

// this is how we are using inside the component
export const useStateValue = () => useContext(StateContext);