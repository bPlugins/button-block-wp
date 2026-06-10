import { sanitizeURL } from '../../../bpl-tools/utils/common';

export const btnProps = (attributes, security = 'none', securityPass, isBackend = false) => {
	const { url, tooltip, target, isDownload, animationType, animationDuration, addID } = attributes;

	const hrefProps = (url && (securityPass || 'none' === security)) ? { href: sanitizeURL(url) } : {};
	const downloadProps = (isDownload) ? { download: '' } : {};
	const linkProps = isBackend ? {} : { ...hrefProps, target, ...downloadProps };
	const tooltipProps = { tooltip, 'tooltip-pos': 'top' }
	const animationProps = {
		'data-aos': animationType,
		// 'data-aos-offset': 100,
		// 'data-aos-delay': 50,
		'data-aos-duration': animationDuration * 1000,
		// 'data-aos-easing':'ease-in-out',
		// 'data-aos-mirror':false,
		// 'data-aos-once':false,
		// 'data-aos-anchor-placement':'bottom-bottom'
	}

	return {
		className: isBackend ? `btnButton btnEditor` : `btnButton`,
		...linkProps,
		...tooltipProps,
		...animationProps,
		id: addID
	}
}