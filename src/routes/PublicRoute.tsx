import { Route, Navigate, Outlet } from 'react-router-dom'

const routes = [
	{
		path: 'register',
		element: <div>Register</div>
	},
	{
		path: 'login',
		element: <div>Login</div>
	}
]

export default routes.map(({path, element}, index) => <Route key={index} path={path} element={element}/>)

