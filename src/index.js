import { registerBlockType } from '@wordpress/blocks';

import './editor.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import { buttonIcon } from './utils/icons';

registerBlockType(metadata, {
	icon: buttonIcon,

	edit: Edit,

	save: () => null
});