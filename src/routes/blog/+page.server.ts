import type { PageServerLoad, Actions } from './$types';


export const load = (async ({ cookies, params }) => {

	return {
		metadata: {
            title: "Way to go",
            description: "A lot of subtitle text",
            ogImage: "https://gradex.blob.core.windows.net/blogpostimg/bpi1743171419085viking-ship-approaching-shore.jpg"
        }
	};
}) satisfies PageServerLoad;