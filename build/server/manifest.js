const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.B47LEMh8.js",app:"_app/immutable/entry/app.eTwgkgMi.js",imports:["_app/immutable/entry/start.B47LEMh8.js","_app/immutable/chunks/M_7tiFov.js","_app/immutable/chunks/CiVLqiPS.js","_app/immutable/chunks/BwR5wzJ6.js","_app/immutable/entry/app.eTwgkgMi.js","_app/immutable/chunks/CiVLqiPS.js","_app/immutable/chunks/CcMwEEi8.js","_app/immutable/chunks/UE7T29sj.js","_app/immutable/chunks/yldFejyI.js","_app/immutable/chunks/tOqS9FEB.js","_app/immutable/chunks/BwR5wzJ6.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-D0P9sF_S.js')),
			__memo(() => import('./chunks/1-k7dfH_NF.js')),
			__memo(() => import('./chunks/2-Du5QhA0Y.js')),
			__memo(() => import('./chunks/3-BXh5lQP1.js'))
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
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
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

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
