export const manifest = (() => {
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
		client: {start:"_app/immutable/entry/start.Banjgwd5.js",app:"_app/immutable/entry/app.CMVGC2iR.js",imports:["_app/immutable/entry/start.Banjgwd5.js","_app/immutable/chunks/CGqvFRZ1.js","_app/immutable/chunks/CiVLqiPS.js","_app/immutable/chunks/BwR5wzJ6.js","_app/immutable/entry/app.CMVGC2iR.js","_app/immutable/chunks/CiVLqiPS.js","_app/immutable/chunks/CcMwEEi8.js","_app/immutable/chunks/UE7T29sj.js","_app/immutable/chunks/yldFejyI.js","_app/immutable/chunks/tOqS9FEB.js","_app/immutable/chunks/BwR5wzJ6.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
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

export const prerendered = new Set([]);

export const base = "";