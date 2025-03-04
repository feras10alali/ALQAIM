import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.By8qo0Nr.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/sE7uwzF8.js","_app/immutable/chunks/BbQRLkzJ.js","_app/immutable/chunks/Dmd9XcG5.js","_app/immutable/chunks/Do9z1AOy.js","_app/immutable/chunks/ByApYbtR.js","_app/immutable/chunks/Cg3wvNLM.js","_app/immutable/chunks/CU5BvWRA.js","_app/immutable/chunks/BTzIOin2.js","_app/immutable/chunks/uxNCKtp8.js","_app/immutable/chunks/BrAP010I.js","_app/immutable/chunks/B7o3Kzx-.js","_app/immutable/chunks/BoBKC5nJ.js","_app/immutable/chunks/BeIugNh1.js"];
export const stylesheets = [];
export const fonts = [];
