
type Props = {
	name: string
}

const StoryMenu : React.FC<Props> =  ({name}) => {

	return(
		<div>
			{name}
		</div>
	)
}

export default StoryMenu