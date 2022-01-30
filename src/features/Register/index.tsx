import BasicInput from 'Components/BasicInput'
import BasicInputWrapper from 'Components/BasicInputWrapper'
import { useAuth } from 'context/AuthContext'
import { FormEventHandler, MouseEventHandler, useEffect, useRef, useState } from 'react'

const Register: React.FC =  () => {

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	
	const { signup, currentUser } = useAuth()


	useEffect(() => {
	}, [currentUser])

	const onSubmit: FormEventHandler<HTMLElement> = (e) => {
		e.preventDefault()
		
		signup(username, password).then(res => {
			console.log(res)
		})
		.catch(err => {
			console.log(err)
		})
	}


	return(
		// <div>
		// 	Register
		// 	<div classNameName='flex mx-auto w-80'>
		// 		<form classNameName='shadow-md px-8 py-8 rounded'>
		// 			<BasicInputWrapper>
		// 				<BasicInput onChange={(e) => setUsername(e.target.value)} value={username}  type="email"/>
		// 			</BasicInputWrapper>
		// 			<BasicInputWrapper>
		// 				<BasicInput onChange={(e) => setPassword(e.target.value)} value={password} type="password" />
		// 			</BasicInputWrapper>
		// 			<BasicInputWrapper>
		// 				<BasicInput onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} type="password" />
		// 			</BasicInputWrapper>
		// 			<button onClick={onSubmit} classNameName='w-80 border rounded py-2'>Submit</button>
		// 		</form>
		// 	</div>
		// </div>

		<div className="bg-grey-lighter min-h-screen flex flex-col">
			<form onSubmit={onSubmit} className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
					<div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
							<h1 className="mb-8 text-3xl text-center">Sign up</h1>
							
							<input 
									type="text"
									className="block border border-grey-light w-full p-3 rounded mb-4"
									name="email"
									onChange={e => setUsername(e.target.value)}
									placeholder="Email" />

							<input 
									type="password"
									className="block border border-grey-light w-full p-3 rounded mb-4"
									name="password"
									onChange={e => setPassword(e.target.value)}
									placeholder="Password" />
							<input 
									type="password"
									className="block border border-grey-light w-full p-3 rounded mb-4"
									name="confirm_password"
									onChange={e => setConfirmPassword(e.target.value)}
									placeholder="Confirm Password" />

							<button
									type="submit"
									className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
							>Create Account</button>

							<div className="text-center text-sm text-grey-dark mt-4">
									By signing up, you agree to the 
									<a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
											Terms of Service
									</a> and 
									<a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
											Privacy Policy
									</a>
							</div>
					</div>

					<div className="text-grey-dark mt-6">
							Already have an account? 
							<a className="no-underline border-b border-blue text-blue" href="../login/">
									Log in
							</a>.
					</div>
			</form>
    </div>
	)
} 

export default Register
