import { ChangeEventHandler, forwardRef } from 'react'

type Props  = {
	type: string,
	value: string,
	onChange: ChangeEventHandler<HTMLInputElement>
}

const BasicInput = forwardRef<HTMLInputElement, Props>(({type, value, onChange}, ref) => {
  return <input onChange={onChange} value={value} className='flex-1 px-3' ref={ref} type={type} />;
});


export default BasicInput