import { __ } from '@wordpress/i18n';
import { gutenbergTabIcon, shortcodeTabIcon, elementorTabIcon, phpTabIcon } from './icons';

const slug = 'button-block';

export const dashboardInfo = (info) => {
	const { version, adminUrl = '', startUrl = '', licenseActiveNonce, deleteDataOnUninstall = false, uninstallNonce = '' } = info;

	return {
		name: `Button Block`,
		displayName: `Button Block - Design Stylish, Interactive, and Multi-Functional Buttons`,
		description: 'Get multi-functional buttons. The Button Block plugin comes up with many useful styling options that make you happy to build responsive, interactive, stylish buttons in a few clicks.',
		slug,
		version,
		adminUrl,
		displayOurPlugins: true,
		media: {
			logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
			banner: `https://ps.w.org/${slug}/assets/banner-772x250.png`,
			thumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${slug}.png`,
			// proThumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${slug}-pro.png`,
			video: 'https://www.youtube.com/watch?v=7AsT69P2bMk',
			isYoutube: true
		},
		pages: {
			org: `https://wordpress.org/plugins/${slug}/`,
			// landing: `https://bplugins.com/products/${slug}/`,
			docs: `https://bplugins.com/docs/${slug}/`,
			pricing: `https://bplugins.com/products/${slug}/pricing/`,
		},
		freemius: {
			product_id: 13491,
			plan_id: 22602,
			public_key: 'pk_8fb5be7805414bb29e5b06c24566a'
		},
		licenseActiveNonce,
		deleteDataOnUninstall,
		uninstallNonce,
		startButton: {
			label: 'Start Now',
			url: startUrl
		}
	}
}

export const welcomeInfo = (adminUrl) => ({
	keywords: ['Button', 'Styling', 'Animation', 'Popup'],
	keywordsLabel: 'Features',
	gettingStarted: {
		tabs: [
			{
				key: 'gutenberg',
				label: 'Gutenberg',
				icon: gutenbergTabIcon,
				steps: [
					{
						num: 1,
						title: __('Add the Button Block', 'button-block'),
						body: __('Open the block editor on any post or page. Click the <strong>+</strong> icon in the top-left corner or type <strong>/Button Block</strong> to find and insert the Button Block.', 'button-block'),
						link: { url: `${adminUrl}post-new.php`, label: __('Open Editor', 'button-block') }
					},
					{
						num: 2,
						title: __('Customize Style', 'button-block'),
						body: __('Use the block settings in the sidebar to style your button. You can choose layouts, customize alignment, add hover effects, set typography, adjust border-radius, background, and text colors.', 'button-block')
					},
					{
						num: 3,
						title: __('Configure Button Action', 'button-block'),
						body: __('Configure what happens when a user clicks the button. Set the link URL, choose whether it opens a popup (Pro), triggers a file download (Pro), or set custom rel attributes and referrer policies.', 'button-block')
					},
					{
						num: 4,
						title: __('Style & Publish', 'button-block'),
						body: __('Use the design controls to customize hover states, custom shadows, and animations. When satisfied, publish or update the page.', 'button-block')
					}
				]
			},
			{
				key: 'shortcode',
				label: 'ShortCode',
				icon: shortcodeTabIcon,
				steps: [
					{
						num: 1,
						title: __('Open Button Block Generator', 'button-block'),
						body: __('Go to <strong>Button Block &rsaquo; Add New</strong> (or the Button Block CPT list) in your WordPress admin menu to create a reusable button.', 'button-block'),
						link: { url: `${adminUrl}edit.php?post_type=button-block`, label: __('Button Block Generator', 'button-block') }
					},
					{
						num: 2,
						title: __('Configure the Block', 'button-block'),
						body: __('In the editor, design and customize your button using the block options in the sidebar. Give it a title for easy reference and publish it.', 'button-block')
					},
					{
						num: 3,
						title: __('Copy the Shortcode', 'button-block'),
						body: __('After publishing, go to the <strong>Button Block</strong> list table. You will see a <strong>ShortCode</strong> column displaying <code>[btn_block id=POST_ID]</code>. Click it to copy to your clipboard.', 'button-block')
					},
					{
						num: 4,
						title: __('Paste Anywhere', 'button-block'),
						body: __('Paste the copied shortcode (e.g. <code>[btn_block id=123]</code>) into any post, page, widget area, or layout using the <strong>Shortcode</strong> block.', 'button-block')
					}
				]
			},
			{
				key: 'elementor',
				label: 'Elementor',
				icon: elementorTabIcon,
				steps: [
					{
						num: 1,
						title: __('Create a Button Post', 'button-block'),
						body: __('Go to <strong>Button Block &rsaquo; Add New</strong>, design your button, and publish it. Copy the shortcode <code>[btn_block id=YOUR_ID]</code> from the list table.', 'button-block'),
						link: { url: `${adminUrl}edit.php?post_type=button-block`, label: __('Button Block Generator', 'button-block') }
					},
					{
						num: 2,
						title: __('Add Shortcode Widget', 'button-block'),
						body: __('Open the Elementor editor on any page. Search for the <strong>Shortcode</strong> widget and drag it to your desired section/column.', 'button-block')
					},
					{
						num: 3,
						title: __('Enter & Preview', 'button-block'),
						body: __('Paste your shortcode (e.g. <code>[btn_block id=123]</code>) into the Shortcode input box to preview the stylized button live on the canvas.', 'button-block')
					}
				]
			},
			{
				key: 'php',
				label: 'Theme / PHP',
				icon: phpTabIcon,
				steps: [
					{
						num: 1,
						title: __('Create a Button Post', 'button-block'),
						body: __('Go to <strong>Button Block &rsaquo; Add New</strong>, customize your button, and copy the shortcode <code>[btn_block id=YOUR_ID]</code> from the post list.', 'button-block'),
						link: { url: `${adminUrl}edit.php?post_type=button-block`, label: __('Button Block Generator', 'button-block') }
					},
					{
						num: 2,
						title: __('Open Theme File', 'button-block'),
						body: __('Open the PHP template file in your theme where you want the button to appear (e.g. <code>header.php</code>, <code>footer.php</code>, <code>single.php</code>, or custom template files).', 'button-block')
					},
					{
						num: 3,
						title: __('Render via do_shortcode', 'button-block'),
						body: __('Add <code>&lt;?php echo do_shortcode(\'[btn_block id=YOUR_ID]\'); ?&gt;</code> (replace <em>YOUR_ID</em> with the actual post ID) to render the button.', 'button-block')
					}
				]
			}
		]
	},
	changelogs: [
		{
			version: '1.2.6 - 08 Sep 2026',
			type: 'fix',
			list: [
				'Fix: Open in new tab opened two tabs instead of one.',
				'Fix: Download button opened an extra blank tab alongside the download.',
				'Fix: Editor panel strings could not be translated.',
				'Update: The shortcode is now shown in the block sidebar while editing a saved button.',
				'Update: A button without a link is now a real button element, so it works with the keyboard and screen readers.'
			]
		},
		{
			version: '1.2.5 - 10 Jun 2026',
			type: 'update',
			list: [
				'Update: SDK',
				'Update: Performance Improvement'
			]
		},
		{
			version: '1.2.4 - 04 Mar 2026',
			type: 'update',
			list: [
				'Update: Admin Dashboard - Improved UI with better navigation and clearer feature organization.'
			]
		},
		{
			version: '1.2.3 - 25 Nov 2025',
			type: 'update',
			list: [
				'Extend Icons library.',
				'Only load libraries when needed.'
			]
		},
		{
			version: '1.2.2 - 21 Jul 2025',
			type: 'fix',
			list: [
				'Fix popup issue.'
			]
		},
		{
			version: '1.2.1 - 20 Jul 2025',
			type: 'fix',
			list: [
				'Fix Post Duplicate issue.',
				'Update SDK.'
			]
		},
		{
			version: '1.2.0 - 3 Mar 2025',
			type: 'update',
			list: [
				'URL sanitize.'
			]
		},
		{
			version: '1.1.9 - 21 Feb 2025',
			type: 'update',
			list: [
				'Text sanitize.'
			]
		}
	],
	changelogsLimit: 5,
	changelogsReadMoreLabel: 'View More Changelogs',
	proFeatures: [
		__('Popup with image, video, docs, or blocks.', 'button-block'),
		__('Protect a button by password, email, or role.', 'button-block'),
		__('Collect and browse captured email leads.', 'button-block'),
		__('Set a custom file name for the download.', 'button-block'),
		__('Add rel and referrer policy attributes.', 'button-block'),
		__('Place the icon and tooltip on any side.', 'button-block'),
		__('Hide the button on desktop, tablet, or mobile.', 'button-block')
	]
})

export const demoInfo = {
	allInOneLabel: 'See All Demos',
	allInOneLink: '',
	demos: [
		{
			icon: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z'/></svg>`,
			title: 'Default',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/button-block-default'
		},
		{
			title: 'Download Button',
			icon: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z'/></svg>`,
			type: 'iframe',
			url: 'https://bblockswp.com/demo/button-block-download-button'
		},
		{
			title: 'Tooltip',
			icon: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z'/></svg>`,
			type: 'iframe',
			url: 'https://bblockswp.com/demo/button-block-tooltip'
		},
		{
			title: 'Icon',
			icon: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><path d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/></svg>`,
			type: 'iframe',
			url: 'https://bblockswp.com/demo/button-block-icon'
		},
		{
			title: 'Customize',
			icon: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z'/></svg>`,
			type: 'iframe',
			url: 'https://bblockswp.com/demo/button-block-customize'
		},
		{
			title: 'Animations',
			icon: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' id='lightning-charge-fill'><path d='M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z'/></svg>`,
			type: 'iframe',
			url: 'https://bblockswp.com/demo/button-block-animations'
		},
		{
			title: 'Popup',
			icon: `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M432 64H208c-8.8 0-16 7.2-16 16V96H128V80c0-44.2 35.8-80 80-80H432c44.2 0 80 35.8 80 80V304c0 44.2-35.8 80-80 80H416V320h16c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zM0 192c0-35.3 28.7-64 64-64H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192zm64 32c0 17.7 14.3 32 32 32H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32 14.3-32 32z'/></svg>`,
			type: 'iframe',
			url: 'https://bblockswp.com/demo/button-block-popup'
		}
	]
}

export const pricingInfo = {
	logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`, // Optional
	pluginId: 13491,
	planId: 22602,
	licenses: [
		1,
		3,
		null
	],
	button: {
		label: 'Buy Now ➜'
	},
	featured: {
		selected: 3, // choose from licenses item
		text: 'Best Value'
	}
}

export const settingsInfo = {
	ajaxAction: 'btnSaveUninstallOption',
	cleanupItems: [
		__('All shortcode posts (button-block post type)', 'button-block'),
		__('Plugin settings', 'button-block')
	]
}