<?php
/**
 * Uninstall handler for Button Block.
 *
 * Cleans up plugin data when the plugin is deleted from the admin.
 * Only runs if the user has opted in via the "Delete data on uninstall" setting.
 *
 * @package BTN
 */

// Exit if not called by WordPress.
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit;
}

$btnbOptions		= get_option( 'btn_options', [] );
$btnbIsDeleteData	= isset( $btnbOptions['delete_data_on_uninstall'] ) ? $btnbOptions['delete_data_on_uninstall'] : false;

if ( ! $btnbIsDeleteData ) {
	return;
}

// 1. Delete all 'button-block' custom post type posts and their meta/revisions.
$btnbPostIds = get_posts( [
	'post_type'			=> 'button-block',
	'posts_per_page'	=> -1,
	'fields'			=> 'ids',
	'post_status'		=> 'any',
] );

if ( ! empty( $btnbPostIds ) ) {
	foreach ( $btnbPostIds as $btnbPostId ) {
		wp_delete_post( $btnbPostId, true ); // Force delete (bypass trash).
	}
}

global $wpdb;

// 2. Drop the email lead table if it exists.
$btnbEmailLeadTableName = $wpdb->prefix . 'btn_pro_email_lead';
// phpcs:ignore WordPress.DB.DirectDatabaseQuery.SchemaChange, WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
$wpdb->query( $wpdb->prepare( "DROP TABLE IF EXISTS %i", $btnbEmailLeadTableName ) );

// 3. Delete plugin options.
delete_option( 'button_block_option' );
delete_option( 'btn_options' );
