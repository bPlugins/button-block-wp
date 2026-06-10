import { sanitizeHTML } from '../../../../bpl-tools/utils/common';
import { primaryColor, secondaryColor } from '../../../../bpl-tools/utils/data';
import { getBorderCSS, getColorsCSS, getMultiShadowCSS, getSpaceCSS, getTypoCSS } from '../../../../bpl-tools/utils/getCSS';

import { prefix } from '../../utils/data';

const Style = ({ attributes, id }) => {
	const { isFullWidth, addCSS, alignment, typography, colors, hovColors, padding, border, shadow } = attributes;

	const mainSl = `#${id}`;
	const btnSl = `${mainSl} .${prefix}`;
	const sanitizeCSS = (css) => {
		if (typeof css !== 'string') {
			return '';
		}
		return css
			.replace(/</g, '')
			.replace(/expression\s*\(|javascript\s*:/gi, '')
			.replace(/@import/gi, '')
			.trim();
	};

	return <>
		<style dangerouslySetInnerHTML={{
			__html: sanitizeHTML(`
			${getTypoCSS('', typography)?.googleFontLink}
			${getTypoCSS(btnSl, typography)?.styles}

			${mainSl}{
				text-align: ${alignment};
			}
			@media only screen and (min-width: 769px) {
				${btnSl}:not(.btnEditor){
					display: inline-flex;
				}
				${btnSl}.btnEditor{
					opacity: 1;
				}
			}
			@media only screen and (max-width: 768px) and (min-width: 577px) {
				${btnSl}:not(.btnEditor){
					display: inline-flex;
				}
				${btnSl}.btnEditor{
					opacity: 1;
				}
			}
			@media only screen and (max-width: 576px) {
				${btnSl}:not(.btnEditor){
					display: inline-flex;
				}
				${btnSl}.btnEditor{
					opacity: 1;
				}
			}
			${btnSl}{
				${getColorsCSS(colors) || `color: #fff; background-color: ${primaryColor};`}
				width: ${isFullWidth ? '100%' : 'auto'};
				padding: ${getSpaceCSS(padding) || '10px 20px'};
				${getBorderCSS(border) || 'border-radius: 5px;'}
				box-shadow: ${getMultiShadowCSS(shadow?.shadow || shadow) || 'none'};
			}
			${btnSl}:hover{
				${getColorsCSS(hovColors) || `color: #fff; background-color: ${secondaryColor};`}
			}
			${sanitizeCSS(addCSS)}
			`).replace(/\s+/g, ' ')
		}} />
	</>;
}
export default Style;