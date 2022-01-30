import Dashboard from 'Features/Dashboard'
import { Component } from 'react'
import { Outlet, Route, Navigate, useParams } from 'react-router-dom'

// type ComponentRoute = {
// 	name: string,
// 	element: strin
// }

const Note = () => {
	const { id } = useParams()
	return <div>hello world {id}</div>
}

const routes = [
	{
		name: '/',
		element: <Dashboard/>
	},
	{
		name: 'story',
		element: <div>Story</div>
	},
	{
		name: 'hello/:id',
		element: <Note/>
	}
]

export default routes.map(({name, element}, index) => <Route key={index} path={name} element={element}/>)