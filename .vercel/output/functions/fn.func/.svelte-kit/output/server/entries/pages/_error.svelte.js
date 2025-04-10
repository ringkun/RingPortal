import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { P as PageDefault } from "../../chunks/PageDefault.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(PageDefault, "PageDefault").$$render($$result, {}, {}, {})} <h1 class="BodyText" data-svelte-h="svelte-18dwxyv"><p class="Emphasis">Whoop, seems like you were lead to a page that doesn&#39;t exist.</p> <p>Try to navigate through the top bar for all available pages. I can at least promise those are available.</p></h1>`;
});
export {
  Error as default
};
