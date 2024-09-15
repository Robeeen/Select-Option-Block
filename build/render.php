<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<?php
	$selectedItems = $attributes['selectedItems'];
	$items = [
		['id' => 'item1', 'label' => __('Variant 1')],
		['id' => 'item2', 'label' => __('Variant 2')],
		['id' => 'item3', 'label' => __('Variant 3')]
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
