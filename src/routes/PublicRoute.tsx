import Login from 'Features/Login'
import Register from 'Features/Register'
import { Route, Navigate, Outlet } from 'react-router-dom'

const routes = [
	{
		path: 'register',
		element: <Register/>
	},
	{
		path: 'login',
		element: <Login/>
	}
]

export default routes.map(({path, element}, index) => <Route key={index} path={path} element={element}/>)

