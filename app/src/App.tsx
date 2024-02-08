import React from 'react';

import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

const App: React.FC = () => {
	return (
		<div id='app'>
			<Header />
			<Sidebar />
			<Content />
		</div>
	);
};

export default App;
