import * as server from '../entries/pages/blog/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.BM9rJdTn.js","_app/immutable/chunks/yldFejyI.js","_app/immutable/chunks/CiVLqiPS.js","_app/immutable/chunks/YggaDgYH.js","_app/immutable/chunks/UE7T29sj.js","_app/immutable/chunks/C-7BITkP.js","_app/immutable/chunks/tOqS9FEB.js"];
export const stylesheets = [];
export const fonts = [];
