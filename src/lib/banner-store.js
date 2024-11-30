/**
 * @fileoverview Banner store module.
 * @module banner-store
 */

import { writable } from 'svelte/store';

/**
 * @typedef {Object} AppToast
 * @property {string} title - The title of the banner.
 * @property {string} sub_title - The subtitle of the banner.
 * @property {string} image - The image URL of the banner.
 */

/**
 * @type {import('svelte/store').Writable<AppToast>}
 * @description The banner store, initialized with default values.
 */
export let bannerStore = writable({
	/**
	 * @default ''
	 */
	title: '',
	/**
	 * @default ''
	 */
	sub_title: '',
	/**
	 * @default ''
	 */
	image: ''
});

/**
 * @function setBanner
 * @description Updates the banner store with new values.
 * @param {Object} options - The new banner values.
 * @param {string} [options.title] - The new title.
 * @param {string} [options.sub_title] - The new subtitle.
 * @param {string} [options.image] - The new image URL.
 */
export function setBanner({ title, sub_title, image }) {
	bannerStore.update((v) => ({
		...v,
		title: title || '',
		sub_title: sub_title || '',
		image: image || ''
	}));
}
