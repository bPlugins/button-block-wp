import { useEffect, useRef } from 'react';
import { __ } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';
import { RichText, useBlockProps } from '@wordpress/block-editor';

import Button from '../Common/Button';
import Style from '../Common/Style';
import Settings from './Settings/Settings';
import { prefix } from '../../utils/data';

const Edit = props => {
	const { attributes, setAttributes, clientId, currentPostId } = props;
	const { cPostId, text, animationType, animationDuration } = attributes;

	const buttonEl = useRef(null);

	useEffect(() => {
		if (currentPostId !== cPostId) {
			setAttributes({ cPostId: currentPostId });
		}
	}, []);

	useEffect(() => {
		window['AOS']?.init();
	}, []);

	useEffect(() => {
		const btnClassList = buttonEl.current?.classList;

		if (btnClassList) {
			btnClassList.remove('aos-init');
			btnClassList.remove('aos-animate');

			setTimeout(() => {
				btnClassList.add('aos-init');
				btnClassList.add('aos-animate');
			}, 500);
		}
	}, [animationType, animationDuration]);

	const id = `${prefix}-${clientId}`;

	return <>
		<Settings {...{ attributes, setAttributes, currentPostId }} />

		<div {...useBlockProps()} id={id}>
			<Style {...{ attributes, id }} />

			<Button {...{ attributes, ref: buttonEl, isBackend: true }}>
				<RichText className='btnText' tagName='span' value={text} onChange={val => setAttributes({ text: val })} placeholder={__('Button Text', 'button-block')} allowedFormats={['core/bold', 'core/italic', 'core/link']} inlineToolbar />
			</Button>
		</div>
	</>;
};
export default withSelect((select) => {
	const { getCurrentPostId } = select('core/editor');
	return {
		currentPostId: getCurrentPostId()
	}
})(Edit);