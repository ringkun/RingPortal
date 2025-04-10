import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "./ssr.js";
import { b as base } from "./paths.js";
const global = "";
const TopBar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".index.svelte-c6cpe0.svelte-c6cpe0{display:block;flood-color:rgb(75, 194, 224);background-color:rgb(50, 164, 230);display:inline-block;position:relative;font-family:Verdana;font-size:15px;border-style:solid;border-color:rgb(8, 102, 184);padding:2px;box-shadow:0px 0px 10px 10px rgb(14, 148, 148)}.index.svelte-c6cpe0 a.svelte-c6cpe0{border-radius:5px;transition:1s;padding:10px}.index.svelte-c6cpe0 a.svelte-c6cpe0:hover{box-shadow:0px 0px 10px 10px rgb(14, 148, 148);background-color:rgb(11, 206, 255)}",
  map: null
};
const TopBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="index svelte-c6cpe0" data-svelte-h="svelte-17lf4pd"><a href="${escape(base, true) + "/"}" class="svelte-c6cpe0">Home</a> <a href="${escape(base, true) + "/comp-sci"}" class="svelte-c6cpe0">Comp Sci.</a> <a href="${escape(base, true) + "/vid-pro"}" class="svelte-c6cpe0">Vid Pro.</a> <a href="${escape(base, true) + "/game-dev"}" class="svelte-c6cpe0">Game Dev.</a> <a href="${escape(base, true) + "/3DModeling"}" class="svelte-c6cpe0">3D Modeling</a> <a href="${escape(base, true) + "/Shader-Graphics"}" class="svelte-c6cpe0">Shader Graphics</a>  </div>`;
});
const GitHubLogo = "/_app/immutable/assets/GitHub-Logo.5bee6914.svg";
const LinkedinLogo = "/_app/immutable/assets/linkedin-icon-2.4e29d108.svg";
const GmailLogo = "/_app/immutable/assets/Gmail-Logo.30bff4f5.svg";
const RPGLogo = "/_app/immutable/assets/RPG Gates Logo Faded.5003933b.svg";
const AffiliateLink_svelte_svelte_type_style_lang = "";
const css = {
  code: ".Columns.svelte-1euyrww.svelte-1euyrww{font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;height:25px;transition:1s;background-color:rgb(0, 0, 0);width:25px;outline:5px;outline-color:black;overflow:hidden}.Columns.svelte-1euyrww.svelte-1euyrww:hover{width:300px}.Columns.svelte-1euyrww img.svelte-1euyrww{width:25px;height:25px}.ColumnCollection.svelte-1euyrww.svelte-1euyrww{position:fixed;bottom:0%;left:0px}.Columns.svelte-1euyrww.svelte-1euyrww:nth-child(odd){background-color:rgb(255, 255, 255)}.hiddenInfo.svelte-1euyrww.svelte-1euyrww{position:relative;bottom:6px;right:0px}",
  map: null
};
const AffiliateLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="ColumnCollection svelte-1euyrww" data-svelte-h="svelte-13s809q"><div class="Columns svelte-1euyrww"><img${add_attribute("src", GitHubLogo, 0)} alt="Github" class="svelte-1euyrww"><a class="hiddenInfo svelte-1euyrww" href="https://github.com/ringkun">Github</a></div> <div class="Columns svelte-1euyrww"><img${add_attribute("src", LinkedinLogo, 0)} alt="Linkedin" class="svelte-1euyrww"><a class="hiddenInfo svelte-1euyrww" href="https://www.linkedin.com/in/william-xue-312874186/">Linkedin</a></div> <div class="Columns svelte-1euyrww"><img${add_attribute("src", GmailLogo, 0)} alt="Gmail" class="svelte-1euyrww"><a class="hiddenInfo svelte-1euyrww" href="mailto:willjiahuexue@gmail.com">willjiahuexue@gmail.com</a></div> <div class="Columns svelte-1euyrww"><img${add_attribute("src", RPGLogo, 0)} alt="RPG" class="svelte-1euyrww"><a class="hiddenInfo svelte-1euyrww" href="https://www.youtube.com/@RingkunProjectGarbage">RPG Youtube Channel</a></div> </div>`;
});
const PageDefault = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` ${validate_component(TopBar, "TopBar").$$render($$result, {}, {}, {})} <hr> ${validate_component(AffiliateLink, "AffiliateLink").$$render($$result, {}, {}, {})}    `;
});
export {
  PageDefault as P
};
