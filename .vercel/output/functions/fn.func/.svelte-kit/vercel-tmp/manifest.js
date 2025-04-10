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
		client: {"start":"_app/immutable/entry/start.1ff9119c.js","app":"_app/immutable/entry/app.4d11792b.js","imports":["_app/immutable/entry/start.1ff9119c.js","_app/immutable/chunks/scheduler.2aecb5fb.js","_app/immutable/chunks/paths.3be87d9c.js","_app/immutable/entry/app.4d11792b.js","_app/immutable/chunks/scheduler.2aecb5fb.js","_app/immutable/chunks/index.6cc61874.js"],"stylesheets":[],"fonts":[]},
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
