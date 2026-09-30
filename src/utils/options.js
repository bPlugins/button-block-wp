import { __ } from '@wordpress/i18n';

export const actionTypes = [
	{ label: __('Link', 'button-block'), value: 'link' }
];
export const securities = [
	{ label: __('None', 'button-block'), value: 'none' },
	{ label: __('Password Protected', 'button-block'), value: 'password' },
	{ label: __('Email', 'button-block'), value: 'email' },
	{ label: __('Login Protected', 'button-block'), value: 'login' }
];

export const rels = [
	{ label: __('Alternate', 'button-block'), value: 'alternate' },
	{ label: __('Author', 'button-block'), value: 'author' },
	{ label: __('Bookmark', 'button-block'), value: 'bookmark' },
	{ label: __('External', 'button-block'), value: 'external' },
	{ label: __('Help', 'button-block'), value: 'help' },
	{ label: __('License', 'button-block'), value: 'license' },
	{ label: __('Next', 'button-block'), value: 'next' },
	{ label: __('No Follow', 'button-block'), value: 'nofollow' },
	{ label: __('No Opener', 'button-block'), value: 'noopener' },
	{ label: __('No Referrer', 'button-block'), value: 'noreferrer' },
	{ label: __('Prev', 'button-block'), value: 'prev' },
	{ label: __('Search', 'button-block'), value: 'search' },
	{ label: __('Tag', 'button-block'), value: 'tag' }
];

export const referrerPolicies = [
	{ label: __('No Referrer', 'button-block'), value: 'no-referrer' },
	{ label: __('No Referrer When Downgrade', 'button-block'), value: 'no-referrer-when-downgrade' },
	{ label: __('Origin', 'button-block'), value: 'origin' },
	{ label: __('Origin When Cross Origin', 'button-block'), value: 'origin-when-cross-origin' },
	{ label: __('Same Origin', 'button-block'), value: 'same-origin' },
	{ label: __('Strict Origin When Cross Origin', 'button-block'), value: 'strict-origin-when-cross-origin' },
	{ label: __('Unsafe Url', 'button-block'), value: 'unsafe-url' }
];

export const xyPositions = [
	{ label: __('Top', 'button-block'), value: 'top' },
	{ label: __('Right', 'button-block'), value: 'right' },
	{ label: __('Bottom', 'button-block'), value: 'bottom' },
	{ label: __('Left', 'button-block'), value: 'left' }
];

export const xPositions = [
	{ label: __('Left', 'button-block'), value: 'left' },
	{ label: __('Right', 'button-block'), value: 'right' },
];

export const buttonTypes = [
	{ label: __('Flat', 'button-block'), value: 'flat', icon: __('Flat', 'button-block') },
	{ label: __('3D', 'button-block'), value: '3d', icon: __('3D', 'button-block') }
];

export const buttonSizes = [
	{ label: __('Small', 'button-block'), value: 'small' },
	{ label: __('Medium', 'button-block'), value: 'medium' },
	{ label: __('Large', 'button-block'), value: 'large' },
	{ label: __('X Large', 'button-block'), value: 'x-large' },
];

export const animationTypes = [
	{ label: __('None', 'button-block'), value: '' },
	{ label: __('Fade', 'button-block'), value: 'fade' },
	{ label: __('Fade Up', 'button-block'), value: 'fade-up' },
	{ label: __('Fade Down', 'button-block'), value: 'fade-down' },
	{ label: __('Fade Left', 'button-block'), value: 'fade-left' },
	{ label: __('Fade Right', 'button-block'), value: 'fade-right' },
	{ label: __('Flip Up', 'button-block'), value: 'flip-up' },
	{ label: __('Flip Down', 'button-block'), value: 'flip-down' },
	{ label: __('Flip Left', 'button-block'), value: 'flip-left' },
	{ label: __('Flip Right', 'button-block'), value: 'flip-right' },
	{ label: __('Zoom In', 'button-block'), value: 'zoom-in' },
	{ label: __('Zoom In Up', 'button-block'), value: 'zoom-in-up' },
	{ label: __('Zoom In Down', 'button-block'), value: 'zoom-in-down' },
	{ label: __('Zoom In Left', 'button-block'), value: 'zoom-in-left' },
	{ label: __('Zoom In Right', 'button-block'), value: 'zoom-in-right' }
];

export const contentTypes = [
	{ label: __('Image', 'button-block'), value: 'image' },
	{ label: __('Audio', 'button-block'), value: 'audio' },
	{ label: __('Video', 'button-block'), value: 'video' },
	{ label: __('Content', 'button-block'), value: 'content' },
	{ label: __('Document', 'button-block'), value: 'document' },
	{ label: __('Iframe', 'button-block'), value: 'iframe' },
];

export const tabs = [
	{ name: 'general', title: __('General', 'button-block') },
	{ name: 'popup', title: __('Popup', 'button-block') },
	{ name: 'style', title: __('Style', 'button-block') }
];