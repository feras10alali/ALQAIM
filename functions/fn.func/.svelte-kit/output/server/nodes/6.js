import * as server from '../entries/pages/settings/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/settings/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/settings/+page.server.js";
export const imports = ["_app/immutable/nodes/6.ZMWT3jCV.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/sE7uwzF8.js","_app/immutable/chunks/Do9z1AOy.js","_app/immutable/chunks/ByApYbtR.js","_app/immutable/chunks/Dmd9XcG5.js","_app/immutable/chunks/DUPHlL9l.js","_app/immutable/chunks/Cg3wvNLM.js"];
export const stylesheets = [];
export const fonts = [];
