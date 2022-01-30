import { useAuth } from 'context/AuthContext'
import React from 'react'
import { Link } from 'react-router-dom'

const folders = [
	{
		name: "Year One",
		slug: 'hello-world',
		id: '1'
	},
	{
		name: "Year Two",
		slug: 'hello-world',
		id: '2'
	},
	{
		name: "Year Threee",
		slug: 'hello-world',
		id: '3'
	},
	{
		name: "Year Four",
		slug: 'hello-world',
		id: '4'
	}, 
	{
		name: "Resources",
		slug: 'hello-world',
		id: '5'
	}
]

const renderFolder = (name: string, slug: string,  id: string) => {
	return(
		<Link to={`hello/${slug}`}  className='cursor-pointer hover:bg-orange-200 border rounded w-24 h-12 mx-3 align-middle'>
			<div className='text-center'>
			{name}
			</div>
		</Link>
	)
}


const Dashboard = () => {


	const { signout } = useAuth()

	const logout = () => {
		signout()
	}

	return(
		<div className='flex h-screen w-full py-8'>
			{folders.map(({name, slug}, index) => {
				return <React.Fragment key={index}>{renderFolder(name, slug, `${index}`)}</React.Fragment>
			})}
			<button onClick={logout}>Logout</button>
		</div>
	)
}

export default Dashboard