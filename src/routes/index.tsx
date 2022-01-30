import { useAuth } from 'context/AuthContext'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import MainRoute from './MainRoute'
import PublicRoute from './PublicRoute'

const RequiredAuth = () => {
	const {currentUser} = useAuth()
	return currentUser ? <Outlet/> : <Navigate to="/login"/>
}

const Logined = () => {
	const {currentUser} = useAuth()
	return currentUser ? <Navigate to="/"/> : <Outlet/>
}

const RootRoute = () => {

	const { loading } = useAuth()

	return(
    <Routes>
			<Route element={loading ?<div>Loading</div> : <RequiredAuth/>}>
				{MainRoute}
			</Route>
			<Route element={loading ? <div>Loading</div> : <Logined/>}>
				{PublicRoute}
			</Route>
			<Route path="*" element={(<div>Not found</div>)}/>
    </Routes>
	)
}

export default RootRoute