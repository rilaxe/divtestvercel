

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CNpKEgn8.js","_app/immutable/chunks/yldFejyI.js","_app/immutable/chunks/CiVLqiPS.js","_app/immutable/chunks/YggaDgYH.js"];
export const stylesheets = [];
export const fonts = [];
