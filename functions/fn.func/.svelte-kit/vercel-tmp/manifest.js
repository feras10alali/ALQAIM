export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.webp","note.txt"]),
	mimeTypes: {".webp":"image/webp",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DI-pvFfA.js",app:"_app/immutable/entry/app.DQwXdD4q.js",imports:["_app/immutable/entry/start.DI-pvFfA.js","_app/immutable/chunks/DDNW7REp.js","_app/immutable/chunks/sE7uwzF8.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/BrAP010I.js","_app/immutable/chunks/BoBKC5nJ.js","_app/immutable/entry/app.DQwXdD4q.js","_app/immutable/chunks/sE7uwzF8.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/BbQRLkzJ.js","_app/immutable/chunks/Dmd9XcG5.js","_app/immutable/chunks/Do9z1AOy.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/Cg3wvNLM.js","_app/immutable/chunks/B7o3Kzx-.js","_app/immutable/chunks/BoBKC5nJ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: __memo(() => import('../output/server/entries/endpoints/login/_server.js'))
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/logout/_server.js'))
			},
			{
				id: "/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: __memo(() => import('../output/server/entries/endpoints/register/_server.js'))
			},
			{
				id: "/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/video/new",
				pattern: /^\/video\/new\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: __memo(() => import('../output/server/entries/endpoints/video/new/_server.js'))
			},
			{
				id: "/video/[id]",
				pattern: /^\/video\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: __memo(() => import('../output/server/entries/endpoints/video/_id_/_server.js'))
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
