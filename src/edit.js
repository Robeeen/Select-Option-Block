/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps,  RichText, InspectorControls } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */


import { SelectControl, PanelBody, CheckboxControl } from '@wordpress/components';


export default function Edit({ attributes, setAttributes }) {
	const { simpleSize, content, selectedItems } = attributes;
	//console.log(selectedItems);

	const items = [
		{ id: 'item1', label: __('Variant 1') },
		{ id: 'item2', label: __('Variant 2') },
		{ id: 'item3', label: __('Variant 3') }
	];

	const toggleItem = (itemId) => {
		const newSelectedItems = selectedItems.includes(itemId)
			? selectedItems.filter((item) => item !== itemId)
			: [...selectedItems, itemId];
		setAttributes({ selectedItems: newSelectedItems });
	};

	return (

		<>
			<InspectorControls>
				<PanelBody title={__('Select Variants')}>
					{items.map((item) => {
						return (
						<CheckboxControl
							key={item.id}
							label={item.label}
							checked={selectedItems.includes(item.id)}
							onChange={() => toggleItem(item.id)}

						
						/>
						)						
					})}

				</PanelBody>
			</InspectorControls>

			<p {...useBlockProps()}>

				<div>
					<h4>{__('Selected Items')}</h4>
					<ul>
						{selectedItems.map((itemId) => {
							const item = items.find((i) => i.id === itemId);
							return <li key={itemId}>{item ? item.label : ''}</li>;
						})}
						{console.log(selectedItems)}
					</ul>
				</div>

				<RichText
					tagName='p'
					value={content}
					onChange={(value) => setAttributes({
						content: value
					})}
				/>

				<SelectControl
					label={__('Size of the Pant: ')}
					value={simpleSize}
					options={[
						{ label: 'Big', value: '100%' },
						{ label: 'Medium', value: '50%' },
						{ label: 'Small', value: '25%' },
					]}
					onChange={(value) => setAttributes({
						simpleSize: value
					})}
				/>
			</p>

		</>

	);
}
