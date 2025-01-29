import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	redirect(308, 'https://discord.com/invite/W388BnzwRr');
}) satisfies PageServerLoad;
