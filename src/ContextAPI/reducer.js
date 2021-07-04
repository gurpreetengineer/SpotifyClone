/* eslint-disable indent */
import propTypes from 'prop-types';

const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null
};

const actionTypes = {
	SET_USER: 'SET_USER'
};

const reducer = (state, action) => {
	console.log('action-------------', action);
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};
		default:
			return state;
	}
};

reducer.propTypes = {
	state: propTypes.object,
	action: propTypes.object
};

export { initialState, reducer, actionTypes };