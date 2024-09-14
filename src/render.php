<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<?php
	$selectedItems = $attributes['selectedItems'];




?>
<p <?php echo get_block_wrapper_attributes(); ?>>
	<?php esc_html_e( 'The wrtten text is : ' . $attributes['content']); ?> <br />
	<?php esc_html_e( 'The size of the Pant is selected: ' . $attributes['simpleSize'] ) ; ?>
	
</p>
