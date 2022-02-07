var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => _layout
});
var import_index_ced29248 = __toModule(require("../../chunks/index-ced29248.js"));
const getStores = () => {
  const stores = (0, import_index_ced29248.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-qw35m.svelte-qw35m{display:flex;justify-content:start;border-bottom:1px var(--primary-color) solid;width:100%;max-width:1024px;margin:0 auto}.corner.svelte-qw35m.svelte-qw35m{width:3em;height:3em}nav.svelte-qw35m.svelte-qw35m{display:flex;justify-content:center}ul.svelte-qw35m.svelte-qw35m{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-qw35m.svelte-qw35m{position:relative;height:100%}li.active.svelte-qw35m.svelte-qw35m::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--accent-color)}nav.svelte-qw35m a.svelte-qw35m{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-qw35m.svelte-qw35m:hover{color:var(--accent-color)}",
  map: null
};
const Header = (0, import_index_ced29248.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_ced29248.a)(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="${"svelte-qw35m"}"><nav class="${"svelte-qw35m"}"><ul class="${"svelte-qw35m"}"><li class="${["svelte-qw35m", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-qw35m"}">Home</a></li></ul></nav>
	<div class="${"corner svelte-qw35m"}"></div>
</header>`;
});
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-128dmpm.svelte-128dmpm{color:white}main.svelte-128dmpm.svelte-128dmpm{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}footer.svelte-128dmpm.svelte-128dmpm{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px}footer.svelte-128dmpm a.svelte-128dmpm{font-weight:bold}@media(min-width: 480px){footer.svelte-128dmpm.svelte-128dmpm{padding:40px 0}}",
  map: null
};
const _layout = (0, import_index_ced29248.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_ced29248.v)(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"svelte-128dmpm"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-128dmpm"}">Site designed and implemented by <a href="${"https://linkedin.com/in/chrisdillinger"}" class="${"svelte-128dmpm"}">Chris Dillinger</a>
</footer>`;
});
