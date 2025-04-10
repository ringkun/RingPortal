

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a37e79d5.js","_app/immutable/chunks/scheduler.2aecb5fb.js","_app/immutable/chunks/index.6cc61874.js","_app/immutable/chunks/PageDefault.a9ccdb04.js","_app/immutable/chunks/paths.2337daa1.js"];
export const stylesheets = ["_app/immutable/assets/PageDefault.0d7bd511.css"];
export const fonts = [];
