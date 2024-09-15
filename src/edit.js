import { __ } from '@wordpress/i18n';
import { useBlockProps,  RichText, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';
import { SelectControl, PanelBody, CheckboxControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const { simpleSize, content, selectedItems } = attributes;
	//console.log(selectedItems);

	const items = [
		{ id: 'item1', label: __('HTML') },
		{ id: 'item2', label: __('CSS3') },
		{ id: 'item3', label: __('JsScript') },
		{ id: 'item4', label: __('React Js') },
		{ id: 'item5', label: __('Next Js') },
		{ id: 'item6', label: __('Python') },
		{ id: 'item7', label: __('Php') },
		{ id: 'item8', label: __('WebPack') },
		{ id: 'item9', label: __('Redux') },
		{ id: 'item10', label: __('TypeScript') },
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
				<PanelBody title={__('Select Languages')}>
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
					label={__('Size of the Trouser: ')}
					value={simpleSize}
					options={[
						{ label: 'Big', value: 'West-40-Inch' },
						{ label: 'Medium', value: 'West-34-Inch' },
						{ label: 'Small', value: 'West-29-Inch' },
					]}
					onChange={(value) => setAttributes({
						simpleSize: value
					})}
				/>
			</p>

		</>

	);
}
