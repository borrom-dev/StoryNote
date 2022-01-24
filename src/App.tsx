import React from 'react';
import StoryPage from 'Features/Story'
import './App.css';
import MainRoute from 'routes';
import { BrowserRouter, Outlet } from 'react-router-dom';

function App() {
  return (
		// <BrowserRouter>
		// 	<MainRoute/>
		// </BrowserRouter>
		<div>
			Hello world
			<Outlet/>
		</div>
  );
}

export default App;
