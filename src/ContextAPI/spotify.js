import clientID from './ENCRYPT';

const authEndPoint = 'https://accounts.spotify.com/authorize';
const redirectURI = 'http://localhost:3000/';

const scopes = [
	'user-read-currently-playing',
	'user-read-recently-played',
	'user-read-playback-state',
	'user-top-read',
	'user-modify-playback-state'
];
// Take "authEndPoint", merge it with "clientID", append a "redirectURI" (After success where to proceed),
// and give it a scope (permissions to ask) which will be concatenated (join) with 'spaces' (ASCII = '%20')
// in between.
const loginURI = `${authEndPoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;

// Working: 
// It goes at the URL (Location) and looks for hash symbol (#, hash). Then, it sub-strings it, takes the
// first part and splits it on the basis of "&" symbol.
// Then it uses reduce function, in which it takes in an anonymous function and a second parameter. The Second
// parameter is being assigned to the initial value (the parameter of anonymous function).
// The function takes in initial and item as parameters.
// Initial => Value from 2nd parameter of reduce(()=> {}, {})
// item => value from outside return function, in this case (window.location.hash.substring().split())

// Then it uses that, again split it using "=". Then finally, we use "initial[part[0]]" where we take in 
// first part after splitting by "=" and assigns the second part to it, after Decoding it.

// Remember this is an anonymous function
const fetchTokenFromURI = () => {
	window.location.hash
		.substring(1)
		.split('&')
		.reduce((initial, item) => {
			const parts = item.split('=');
			initial[parts[0]] = decodeURIComponent(parts[1]);
		}, {});
};

export { authEndPoint, loginURI, fetchTokenFromURI };