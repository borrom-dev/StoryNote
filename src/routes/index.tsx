import Story from 'Features/Story'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import MainRoute from './MainRoute'
import PublicRoute from './PublicRoute'

const RootRoute = () => {
	return(
    <Routes>
			<Route>
				{MainRoute}
			</Route>
			<Route element={true ? <Navigate to="/"/> : <Outlet/>}>
				{PublicRoute}
			</Route>
			<Route path="*" element={(<div>Not found</div>)}/>
    </Routes>
	)
}

export default RootRoute