

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.0z3w1bPG.js","_app/immutable/chunks/yldFejyI.js","_app/immutable/chunks/CiVLqiPS.js"];
export const stylesheets = [];
export const fonts = [];
