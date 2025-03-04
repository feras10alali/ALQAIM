import * as universal from '../entries/pages/video/_id_/_page.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/video/_id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/video/[id]/+page.js";
export const imports = ["_app/immutable/nodes/8.-aRpqOp0.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js"];
export const stylesheets = [];
export const fonts = [];
