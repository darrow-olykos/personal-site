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
  default: () => Routes,
  prerender: () => prerender
});
var import_index_f6c97f68 = __toModule(require("../../chunks/index-f6c97f68.js"));
var FeatureCardGrid_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "ul.svelte-1midkwt>li.svelte-1midkwt{position:relative}.text.svelte-1midkwt.svelte-1midkwt{color:var(--primary-color);z-index:3;position:relative;padding-left:10px;margin-top:10px;height:100%}a.svelte-1midkwt.svelte-1midkwt{text-decoration:none;color:var(--primary-color);position:absolute;height:100%;width:100%;top:0;left:0;display:block}.container.svelte-1midkwt.svelte-1midkwt{display:flex;flex-wrap:wrap;gap:16px;justify-content:center}.horizontal-stack.svelte-1midkwt.svelte-1midkwt{display:flex;justify-content:start;list-style:none;gap:16px}.horizontal-stack.svelte-1midkwt>.svelte-1midkwt{border:1px var(--primary-color) solid;width:108px;height:376px;padding:10px}.horizontal-stack.svelte-1midkwt>.left.svelte-1midkwt{background-image:url(/photos/photo-charles-river-bw.jpeg);background-size:cover}.horizontal-stack.svelte-1midkwt>.middle-left.svelte-1midkwt{background-image:url(/photos/photo-charles-river-bw.jpeg);background-size:cover;background-position-x:-132px}.horizontal-stack.svelte-1midkwt>.middle-right.svelte-1midkwt{background-image:url(/photos/photo-charles-river-bw.jpeg);background-size:cover;background-position-x:-260px}.horizontal-stack.svelte-1midkwt>.right.svelte-1midkwt{background-image:url(/photos/photo-charles-river-bw.jpeg);background-size:cover;background-position:right;background-position-x:142px}.vertical-stack.svelte-1midkwt.svelte-1midkwt{display:flex;flex-direction:column;justify-content:start;list-style:none;gap:16px}.vertical-stack.svelte-1midkwt>.svelte-1midkwt{border:1px var(--primary-color) solid;height:65.5px;padding:10px;width:380px}.left.svelte-1midkwt.svelte-1midkwt::after,.middle-left.svelte-1midkwt.svelte-1midkwt::after,.middle-right.svelte-1midkwt.svelte-1midkwt::after,.right.svelte-1midkwt.svelte-1midkwt::after{content:'';position:absolute;left:0;top:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);z-index:2}li.svelte-1midkwt.svelte-1midkwt:hover{cursor:pointer;box-shadow:0 0 0 0 rgba(255, 255, 255, 1);animation:svelte-1midkwt-grow-white 1.7s, svelte-1midkwt-pulse-white 1.7s infinite;animation-fill-mode:forwards;transform:scale(1)}@keyframes svelte-1midkwt-grow-white{40%{transform:scale(1.06)}100%{transform:scale(1.06)}}@keyframes svelte-1midkwt-pulse-white{0%{box-shadow:0 0 0 0 rgba(255, 255, 255, 0.7)}100%{box-shadow:0 0 0 10px rgba(255, 255, 255, 0)}}li.svelte-1midkwt.svelte-1midkwt:active{animation:svelte-1midkwt-strong-pulse-white 1s;animation-fill-mode:forwards}@keyframes svelte-1midkwt-strong-pulse-white{0%{transform:scale(1.06);box-shadow:0 0 0 10px rgba(255, 255, 255, 0.7)}100%{transform:scale(1.06);box-shadow:0 0 0 10px rgba(255, 255, 255, 0)}}",
  map: null
};
const FeatureCardGrid = (0, import_index_f6c97f68.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"container svelte-1midkwt"}"><div>What would you like to do?
		<ul class="${"horizontal-stack svelte-1midkwt"}"><li class="${"left svelte-1midkwt"}"><a href="${"/blog"}" class="${"svelte-1midkwt"}"><div class="${"text svelte-1midkwt"}">Read Blog</div></a></li>
			<li class="${"middle-left svelte-1midkwt"}"><a href="${"/events"}" class="${"svelte-1midkwt"}"><div class="${"text svelte-1midkwt"}">Find Events</div></a></li>
			<li class="${"middle-right svelte-1midkwt"}"><a href="${"/polls"}" class="${"svelte-1midkwt"}"><div class="${"text svelte-1midkwt"}">Answer polls</div></a></li>
			<li class="${"right svelte-1midkwt"}"><a href="${"/photos"}" class="${"svelte-1midkwt"}"><div class="${"text svelte-1midkwt"}">View photos</div></a></li></ul></div>
	<div>Featured
		<ul class="${"vertical-stack svelte-1midkwt"}">${(0, import_index_f6c97f68.b)([
    "Latest Blog Post: Implementing Visitor Pattern in Rust",
    "Upcoming Event: Rust for Rustaceans Chapter 3 Discussion",
    "Poll: Recommend Software Engineering Book for Senior Devs?",
    'Latest Photo: "Downtown Boston Sunrise"'
  ], (text) => {
    return `<li class="${"svelte-1midkwt"}">${(0, import_index_f6c97f68.e)(text)}</li>`;
  })}</ul></div>
</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-bc8okk{margin-top:49px}",
  map: null
};
const prerender = true;
const Routes = (0, import_index_f6c97f68.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}`, ""}

<section class="${"svelte-bc8okk"}">${(0, import_index_f6c97f68.v)(FeatureCardGrid, "FeatureCardGrid").$$render($$result, {}, {}, {})}
</section>`;
});
