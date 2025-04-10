export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","Animation/Sunshine.mp4","favicon.png","images/DurandalView.png","images/LaevatinnView.png","images/MimicryView.png","SVG/WJX.svg"]),
	mimeTypes: {".mp4":"video/mp4",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.7d9a7047.js","app":"_app/immutable/entry/app.541e9eac.js","imports":["_app/immutable/entry/start.7d9a7047.js","_app/immutable/chunks/scheduler.2aecb5fb.js","_app/immutable/chunks/paths.2337daa1.js","_app/immutable/entry/app.541e9eac.js","_app/immutable/chunks/scheduler.2aecb5fb.js","_app/immutable/chunks/index.6cc61874.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
