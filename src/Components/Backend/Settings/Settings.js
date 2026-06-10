import { __ } from '@wordpress/i18n';
import { AlignmentToolbar, BlockControls, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, RangeControl, SelectControl, TabPanel, TextControl, TextareaControl, ToggleControl } from '@wordpress/components';

import { BBlocksAds, BtnGroup, ColorsControl, HelpPanel, IconLibrary, InlineDetailMediaUpload, Label, ShadowControl, Typography, Notice } from '../../../../../bpl-tools/Components';
import { BorderControl, SpaceControl } from '../../../../../bpl-tools/Components/Deprecated';
import { AdvertiseCard, PremiumBadge, PremiumPanel } from '../../../../../bpl-tools/ProControls';
import { tabController } from '../../../../../bpl-tools/utils/functions';
import { primaryColor, secondaryColor } from '../../../../../bpl-tools/utils/data';

import { actionTypes, animationTypes, buttonSizes, buttonTypes, tabs } from '../../../utils/options';
import { pricingUrl } from '../../../utils/data';

const Settings = ({ attributes, setAttributes }) => {
	const { text, actionType = 'link', url, tooltip, target, isDownload, isUpIcon, icon, upIcon, type, isFullWidth, size, animationType, animationDuration, addID, addCSS, alignment, typography, colors, hovColors, padding, border, shadow } = attributes;

	return <>
		<InspectorControls>
			<div className='bPlInspectorInfo'>
				<BBlocksAds />
			</div>

			<TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={tabs} onSelect={tabController}>{tab => <>
				{'general' === tab.name && <>
					<HelpPanel slug='button-block' docsLink='https://bplugins.com/docs/button-block' />


					<PanelBody className='bPlPanelBody' title={__('Button', 'button-block')}>
						<PanelRow>
							<Label className=''>{__('Text:', 'button-block')}</Label>
							<TextControl value={text} onChange={val => setAttributes({ text: val })} />
						</PanelRow>

						<SelectControl className='mt20' label={__('Action:', 'button-block')} labelPosition='left' value={actionType} onChange={val => setAttributes({ actionType: val })} options={actionTypes.filter(o => o.value !== 'popup')} />

						<Label>{__('URL:', 'button-block')}</Label>
						<TextControl value={url} onChange={val => setAttributes({ url: val })} />

						<ToggleControl className='mt20' label={__('Open link in new tab', 'button-block')} checked={'_blank' === target} onChange={val => setAttributes({ target: val ? '_blank' : '_self' })} />

						<ToggleControl className='mt20' label={__('Download Button', 'button-block')} checked={isDownload} onChange={val => setAttributes({ isDownload: val })} />

						{isDownload && <>
							<small>{__('Make sure the URL/link is downloadable!', 'button-block')}</small>
							<br />
							<small>{__('This is an experimental feature, and it may not work reliably every time.', 'button-block')} <a href='https://www.w3schools.com/howto/howto_html_download_link.asp' target='_blank' rel='noreferrer'>Source</a></small>
						</>}

						<Notice status='premium' isIcon={true}>
							{__('Unlock popup action, security settings (password, email, role-based protection), custom link relation, referrer policy, and custom download file name with Premium version.', 'button-block')}
						</Notice>
					</PanelBody>


					<PanelBody className='bPlPanelBody' title={__('Elements', 'button-block')} initialOpen={false}>
						<ToggleControl label={__('Upload Icon?', 'button-block')} checked={isUpIcon} onChange={val => setAttributes({ isUpIcon: val })} />

						{isUpIcon ?
							<InlineDetailMediaUpload className='mt10' value={upIcon} types={['image']} onChange={val => setAttributes({ upIcon: val })} placeholder={__('Enter Icon URL', 'button-block')} /> :
							<IconLibrary className='mt10' label={__('Select Icon')} value={icon.svg} onChange={val => setAttributes({ icon: { svg: val } })} />}

						<Label>{__('Tooltip Text:', 'button-block')}</Label>
						<TextControl value={tooltip} onChange={val => setAttributes({ tooltip: val })} />
						<small>{__('If you want to add tooltip on button, type text rather then leave empty.', 'button-block')}</small>

						<Notice status='premium' isIcon={true}>
							{__('Unlock icon position, tooltip position, and device-specific visibility settings with Premium version.', 'button-block')}
						</Notice>
					</PanelBody>


					<PanelBody className='bPlPanelBody' title={__('Design', 'button-block')} initialOpen={false}>
						<ToggleControl label={__('Button Full Width?', 'button-block')} checked={isFullWidth} onChange={val => setAttributes({ isFullWidth: val })} />

						<PanelRow>
							<Label className=''>{__('Button Size:', 'button-block')}</Label>

							<SelectControl value={size} onChange={val => {
								setAttributes({ size: val });

								'small' === val && setAttributes({
									typography: { ...typography, fontSize: 12 },
									padding: { ...padding, vertical: '8px', horizontal: '16px' }
								});
								'medium' === val && setAttributes({
									typography: { ...typography, fontSize: 16 },
									padding: { ...padding, vertical: '12px', horizontal: '24px' }
								});
								'large' === val && setAttributes({
									typography: { ...typography, fontSize: 20 },
									padding: { ...padding, vertical: '14px', horizontal: '30px' }
								});
								'x-large' === val && setAttributes({
									typography: { ...typography, fontSize: 22 },
									padding: { ...padding, vertical: '16px', horizontal: '46px' }
								});
							}} options={buttonSizes} />
						</PanelRow>

						<PanelRow className='mt20'>
							<Label className=''>{__('Button Type:', 'button-block')}</Label>

							<BtnGroup value={type} onChange={val => {
								setAttributes({ type: val });
								'flat' === val && setAttributes({ shadow: [] });
								'3d' === val && setAttributes({
									shadow: [
										{ hOffset: '-5px', vOffset: '6px', blur: '2px', spreed: '0px', color: '#0006', isInset: false },
										{ hOffset: '3px', vOffset: '-3px', blur: '0px', spreed: '2px', color: '#341b7e', isInset: true }
									]
								});
							}} isTextIcon={true} options={buttonTypes} />
						</PanelRow>
					</PanelBody>


					<PanelBody className='bPlPanelBody' title={__('Animation', 'button-block')} initialOpen={false}>
						<PanelRow>
							<Label className=''>{__('Type:', 'button-block')}</Label>
							<SelectControl value={animationType} onChange={val => setAttributes({ animationType: val })} options={animationTypes} />
						</PanelRow>

						<Label>{__('Duration (Speed) (s):', 'button-block')}</Label>
						<RangeControl value={animationDuration} onChange={val => setAttributes({ animationDuration: val })} min={0} max={3} step={0.05} />
						<small>{__('Animation duration of speed in seconds', 'button-block')}</small>
					</PanelBody>


					<PanelBody className='bPlPanelBody' title={__('Additional', 'button-block')} initialOpen={false}>
						<PanelRow>
							<Label className=''>{__('ID:', 'button-block')}</Label>
							<TextControl value={addID} onChange={val => setAttributes({ addID: val })} placeholder={__('Enter additional ID', 'button-block')} />
						</PanelRow>

						<Label>{__('CSS:', 'button-block')}</Label>
						<TextareaControl value={addCSS} onChange={val => setAttributes({ addCSS: val })} placeholder={__('Enter additional CSS', 'button-block')} />
					</PanelBody>
				</>}


				{'popup' === tab.name && <PanelBody className='bPlPanelBody' title={<>{__('Popup Options', 'button-block')}<PremiumBadge /></>}>
					<PremiumPanel title={__('Popup Options', 'button-block')} description={__('Enable dynamic popup content: show image, audio, video, custom blocks, documents, and iframes on button click.', 'button-block')} pricingUrl={pricingUrl} />
				</PanelBody>}


				{'style' === tab.name && <>
					<PanelBody className='bPlPanelBody' title={__('Button', 'button-block')}>
						<Typography value={typography} onChange={val => setAttributes({ typography: val })} defaults={{ fontSize: { desktop: 18, tablet: 17, mobile: 16 }, textDecoration: 'none' }} />

						<ColorsControl value={colors} onChange={val => setAttributes({ colors: val })} defaults={{ color: '#fff', bg: primaryColor }} />

						<ColorsControl label={__('Hover Colors:', 'button-block')} value={hovColors} onChange={val => setAttributes({ hovColors: val })} defaults={{ color: '#fff', bg: secondaryColor }} />

						<SpaceControl className='mt20' label={__('Padding:', 'button-block')} value={padding} onChange={val => setAttributes({ padding: val })} defaults={{ vertical: '10px', horizontal: '20px' }} />

						<BorderControl className='mt20' value={border} onChange={val => setAttributes({ border: val })} defaults={{ radius: '5px' }} />

						<ShadowControl label={__('Shadow:', 'button-block')} value={shadow?.shadow || shadow} onChange={val => setAttributes({ shadow: val })} />
					</PanelBody>
				</>}
			</>}</TabPanel>

			<AdvertiseCard planLink={pricingUrl} />
		</InspectorControls>

		<BlockControls>
			<AlignmentToolbar value={alignment} onChange={val => setAttributes({ alignment: val })} describedBy={__('Button Alignment')} alignmentControls={[
				{ title: __('Button in left', 'button-block'), align: 'left', icon: 'align-left' },
				{ title: __('Button in center', 'button-block'), align: 'center', icon: 'align-center' },
				{ title: __('Button in right', 'button-block'), align: 'right', icon: 'align-right' }
			]} />
		</BlockControls>
	</>;
};
export default Settings;