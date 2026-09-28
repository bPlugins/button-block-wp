import { sanitizeURL } from '../../../bpl-tools/utils/common';

/**
 * A button is rendered as a real <a> only when it has a destination the browser
 * is allowed to handle on its own, and as a <button> otherwise.
 */
export const isAnchor = (attributes, isBackend = false) => {
	// The editor keeps the anchor so the RichText inside stays editable
	if (isBackend) {
		return true;
	}

	return Boolean(attributes.url);
}

export const btnProps = (attributes, isBackend = false) => {
	const { url, tooltip, target, isDownload, animationType, animationDuration, addID } = attributes;

	const asAnchor = isAnchor(attributes, isBackend);

	const downloadProps = (isDownload) ? { download: '' } : {};
	// The <a> carries the destination itself, so the browser navigates natively on click
	const linkProps = (asAnchor && !isBackend) ? { href: sanitizeURL(url), target, ...downloadProps } : {};
	// Never submit a surrounding form
	const buttonProps = asAnchor ? {} : { type: 'button' };
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
		...buttonProps,
		...tooltipProps,
		...animationProps,
		id: addID
	}
}
