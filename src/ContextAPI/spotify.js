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

const loginURI = `${authEndPoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;

export { authEndPoint, loginURI };