import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom';

import { sanitizeHTML, sanitizeURL } from '../../bpl-tools/utils/common';

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
	const { text, target, url, animationType } = attributes;
	const buttonEl = useRef(null);

	useEffect(() => {
		if (animationType) {
			window['AOS']?.init();
		}
	}, []);

	const onClick = () => {
		if (url) {
			window.open(sanitizeURL(url), target);
		}
	}

	return <Button attributes={attributes} ref={buttonEl} onClick={onClick}>
		{text && <span className='btnText' dangerouslySetInnerHTML={{ __html: sanitizeHTML(text) }} />}
	</Button>
}