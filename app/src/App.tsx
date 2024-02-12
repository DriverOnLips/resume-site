import React from 'react';

import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Minibar from './components/minibar/Minibar';

const App: React.FC = () => {
	return (
		<div id='app'>
			<Header />
			<Sidebar />
			<Minibar />
			<Content />
		</div>
	);
};

export default App;
