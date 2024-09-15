<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<?php
	$selectedItems = $attributes['selectedItems'];
	$items = [
		['id' => 'item1', 'label' => __('HTML')],
		['id' => 'item2', 'label' => __('CSS3')],
		['id' => 'item3', 'label' => __('JsScript')],
		['id' => 'item4', 'label' => __('React Js')],
		['id' => 'item5', 'label' => __('Next Js')],
		['id' => 'item6', 'label' => __('Python')],
		['id' => 'item7', 'label' => __('Php')],
		['id' => 'item8', 'label' => __('WebPack')],
		['id' => 'item9', 'label' => __('Redux')],
		['id' => 'item10', 'label' => __('TypeScript')],
	];

?>

<p <?php echo get_block_wrapper_attributes(); ?>>
		<?php
		echo "Selected Items: <br />";
		foreach ($selectedItems as $itemId) {
			$item = array_filter($items, function($i) use ($itemId) {
				return $i['id'] === $itemId;
			});
			$item = reset($item); // Get the first matching item or null
			
			echo ($item ? htmlspecialchars($item['label']) . '<br />' : '');
			}?>

	<?php esc_html_e( 'The wrtten text is : ' . $attributes['content']); ?> <br />
	<?php esc_html_e( 'The size of the Pant is selected: ' . $attributes['simpleSize'] ) ; ?>

	
</p>
