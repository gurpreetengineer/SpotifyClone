import React from 'react';
import Routes from './routes/Routes';
import './App.css';
// import ContainerComponent from './components/ContainerComponents';

function App() {
	return (
		<div className="App">
			{/* NEVER CALL A PATH SPECIFIC COMPONENT, ie If a path has been specified then we should not call that specific component explicitly*/}
			{/* <ContainerComponent /> */}
			<Routes />
		</div>
	);
}

export default App;
