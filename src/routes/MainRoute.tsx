import { Outlet, Route, Navigate } from 'react-router-dom'
const routes = [
	{
		name: '/',
		element: <div>Home</div>
	},
	{
		name: 'story',
		element: <div>Story</div>
	}
]

export default routes.map(({name, element}, index) => <Route key={index} path={name} element={element}/>)