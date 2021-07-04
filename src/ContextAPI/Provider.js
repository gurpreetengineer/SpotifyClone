import React, { createContext, useContext, useReducer } from 'react';
import propTypes from 'prop-types';

const StateContext = createContext();

const StateProvider = ({ initialState, reducer, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)} >
		{children}
	</StateContext.Provider>
);

const useStateProvider = () => useContext(StateContext);

StateProvider.propTypes = {
	initialState: propTypes.object, 
	reducer: propTypes.func, 
	children: propTypes.node,
};


export {StateContext, StateProvider, useStateProvider};