import { useMemo } from 'react';

import { sanitizeSVG, sanitizeURL } from '../../../../bpl-tools/utils/common';

const ButtonIcon = ({ attributes }) => {
	const { isUpIcon, icon, upIcon } = attributes;

	// The icon is author-controlled markup: never inject it raw. sanitizeSVG drops
	// scripts, SMIL and on* handlers; useMemo keeps it from re-parsing every render.
	const safeSvg = useMemo(() => sanitizeSVG(icon?.svg), [icon?.svg]);
	const safeSrc = upIcon?.url ? sanitizeURL(upIcon.url) : null;

	return <>
		{isUpIcon && safeSrc && <img className='btnIcon' src={safeSrc} alt={upIcon?.alt} />}

		{!isUpIcon && <>
			{safeSvg ?
				<span className='btnIcon' dangerouslySetInnerHTML={{ __html: safeSvg }} /> : (
					icon?.class ?
						<i className={`btnIcon ${icon?.class}`} /> :
						null
				)
			}
		</>}
	</>
}
export default ButtonIcon;
