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

<div <?php echo get_block_wrapper_attributes(); ?>>
		<?php
		echo "Selected Items: <br />";?>
		<ul><?Php
		foreach ($selectedItems as $itemId) {
			$item = array_filter($items, function($i) use ($itemId) {
				return $i['id'] === $itemId;
			});
			$item = reset($item); // Get the first matching item or null
			
			?><li><?php echo ($item ? htmlspecialchars($item['label']) . '<br />' : ''); ?></li><?php
			}?>
			</ul><hr />

		<?php esc_html_e($attributes['content']); ?> <br /> <br /> <hr />
		<?php esc_html_e( 'Size of the Trouser: ' . $attributes['simpleSize'] ) ; ?>

</div>
