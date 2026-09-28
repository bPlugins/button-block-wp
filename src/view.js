import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom';

import { sanitizeHTML } from '../../bpl-tools/utils/common';

import './style.scss';
import Button from './Components/Common/Button';
import Style from './Components/Common/Style';

document.addEventListener('DOMContentLoaded', () => {
	const buttonEls = document.querySelectorAll('.wp-block-btn-button');
	buttonEls.forEach(buttonEl => {
		const attributes = JSON.parse(buttonEl.dataset.attributes);

		createRoot(buttonEl).render(<>
			<Style attributes={attributes} id={buttonEl.id} />

			<RenderButton {...{ attributes }} />
		</>);

		buttonEl?.removeAttribute('data-nonce');
		buttonEl?.removeAttribute('data-attributes');
		buttonEl?.removeAttribute('data-info');
	});
});

const RenderButton = ({ attributes }) => {
	const { text, animationType } = attributes;
	const buttonEl = useRef(null);

	useEffect(() => {
		if (animationType) {
			window['AOS']?.init();
		}
	}, []);

	// The <a> carries href, target and download, so the browser handles the click natively
	return <Button attributes={attributes} ref={buttonEl}>
		{text && <span className='btnText' dangerouslySetInnerHTML={{ __html: sanitizeHTML(text) }} />}
	</Button>
}
