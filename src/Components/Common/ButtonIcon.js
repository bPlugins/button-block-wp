const ButtonIcon = ({ attributes }) => {
	const { isUpIcon, icon, upIcon } = attributes;

	return <>
		{isUpIcon && upIcon?.url && <img className='btnIcon' src={upIcon?.url} alt={upIcon?.alt} />}

		{!isUpIcon && <>
			{icon?.svg ?
				<span className='btnIcon' dangerouslySetInnerHTML={{ __html: icon?.svg }} /> : (
					icon?.class ?
						<i className={`btnIcon ${icon?.class}`} /> :
						null
				)
			}
		</>}
	</>
}
export default ButtonIcon;