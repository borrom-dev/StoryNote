import BasicInput from 'Components/BasicInput'
import BasicInputWrapper from 'Components/BasicInputWrapper'
import { useAuth } from 'context/AuthContext'
import { MouseEventHandler, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login : React.FC = () => {

	const [loading, setLoading] = useState<boolean>(false)
	const navigate = useNavigate()
	const {signin} = useAuth()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const login: MouseEventHandler<HTMLButtonElement> = async (e) => {
		e.preventDefault()
		try {
			setLoading(true)
			await signin(email, password)
		} catch (error) {
			//Handle error message
		} finally {
			setLoading(false)
		}
	}

	return loading ? <div className='h-screen w-full bg-gray-400'>Loading</div> : 
	(
		<div className="w-full max-w-md mx-auto mt-20">
			<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Username
					</label>
					<input value={email} onChange={e => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
				</div>
				<div className="mb-6">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Password
					</label>
					<input value={password} onChange={e => setPassword(e.target.value)} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
				</div>
				<div className="flex items-center justify-between">
					<button onClick={login} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
						Sign In
					</button>
					<a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
						Forgot Password?
					</a>
				</div>
			</form>
			<p className="text-center text-gray-500 text-xs">
				&copy;2022 Story Note. All rights reserved.
			</p>
		</div>
	)
}

export default Login