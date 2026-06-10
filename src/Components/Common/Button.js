import { forwardRef } from 'react';
import { btnProps } from '../../utils/config';
import ButtonIcon from './ButtonIcon';

const Button = ({ attributes, isBackend = false, children, onClick = () => { } }, ref) => {
	const { iconPos = 'left' } = attributes;

	return <>
		<a ref={ref} {...btnProps(attributes, 'none', true, isBackend)} onClick={() => onClick()}>
			{'right' !== iconPos && <ButtonIcon attributes={attributes} />}

			{children}
		</a>
	</>
}
export default forwardRef(Button);