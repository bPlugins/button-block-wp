import { forwardRef } from 'react';
import { btnProps, isAnchor } from '../../utils/config';
import ButtonIcon from './ButtonIcon';

const Button = ({ attributes, isBackend = false, children }, ref) => {
	const { iconPos = 'left' } = attributes;

	// A <button> whenever there is no href to hand the browser, an <a> otherwise
	const Tag = isAnchor(attributes, isBackend) ? 'a' : 'button';

	return <>
		<Tag ref={ref} {...btnProps(attributes, isBackend)}>
			{'right' !== iconPos && <ButtonIcon attributes={attributes} />}

			{children}
		</Tag>
	</>
}
export default forwardRef(Button);
