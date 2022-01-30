import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateEmail, updatePassword, User, UserCredential } from 'firebase/auth'
import React, { Context, useContext, useEffect, useState }  from 'react'

import firebase from '../firebase'

const { auth } = firebase

interface IAuthContext {
	currentUser: User | null,
	signup: (email: string, password: string) => Promise<UserCredential>,
	signin: (email: string, password: string) => Promise<UserCredential>,
	signout: () => Promise<void>,
	resetPassword: (email: string) => Promise<void>,
	updateEmail: (email: string) => Promise<void>,
	loading: boolean
}

const dePromise = (() => {})

const initState: IAuthContext = {
	currentUser: null,
	loading: false,
	signup: () => new Promise<UserCredential>(dePromise),
	signin: () => new Promise<UserCredential>(dePromise),
	signout: () => new Promise<void>(dePromise),
	resetPassword: () => new Promise<void>(dePromise),
	updateEmail: () => new Promise<void>(dePromise)
}


const AuthContext = React.createContext<IAuthContext>(initState)

export const useAuth = () => useContext(AuthContext)


export const AuthProvider: React.FC = ({children}) => {

	const [currentUser, setCurrentUser] = useState<User | null >(null)
	const [loading, setLoading] = useState(true)
	
	
	const signup = (email: string, password: string): Promise<UserCredential> => {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const signin = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password)
	
	const signout = ()  => auth.signOut()
	
	const resetPassword = (email: string) => sendPasswordResetEmail(auth, email)
	
	const updateCurrentEmail = (email: string) => updateEmail(currentUser as User, email)
	
	const updateCurrentPassword = (password: string) => updatePassword(currentUser as User, password)

	const value: IAuthContext = {
		currentUser: currentUser,
		signup,
		signin,
		signout,
		resetPassword,
		updateEmail: updateCurrentEmail,
		loading
	}
	
	useEffect(() => {
		const unSubscribe = auth.onAuthStateChanged(user => {
				setCurrentUser(user)
				setLoading(false)
		})
	
		return unSubscribe
	}, [])
	

	return <AuthContext.Provider value={value}>
		{children}
	</AuthContext.Provider>
}

export default AuthProvider