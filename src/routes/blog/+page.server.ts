import client from '../../../client';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load = (async () => {
	const { data } = await client.rpc('get_all_blogs');
	console.log(data.map((item) => item.tags));
	return {
		posts: data ?? []
	};
}) satisfies PageServerLoad;
