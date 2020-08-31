import React, { createContext } from "react";
import reducer from "./reducer";
export const Context = createContext();

export const initialState = {
    first: '0',
    operand: null,
    current: '0',
};

export const Store = props => {
    const [store, dispatch] = React.useReducer(reducer, initialState);
    return (
        <Context.Provider value={{ store, dispatch }}>
            {props.children}
        </Context.Provider>
    );
};