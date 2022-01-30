const BasicInputWrapper : React.FC =  ({children}) => {
	return (
		<div className='flex rounded mb-4 border w-80 h-10'>
			{children}
		</div>
	)
}

export default BasicInputWrapper