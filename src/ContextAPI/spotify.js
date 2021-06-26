import clientID from './ENCRYPT';

const authEndPoint = 'https://accounts.spotify.com/authorize';
const redirectURI = 'http://localhost:3000/';

const scopes = [
	'user-read-currently-playing',
	'user-read-recently-played',
	'user-read-playback-state',
	'user-top-read',
	'user-modified-playback-state'
];
// Take "authEndPoint", merge it with "clientID", append a "redirectURI" (After success where to proceed),
// and give it a scope (permissions to ask) which will be concatenated (join) with 'spaces' (ASCII = '%20')
// in between.
const loginURI = `${authEndPoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;

export { authEndPoint, loginURI };