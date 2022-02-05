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
var import_index_d7a6b172 = __toModule(require("../../chunks/index-d7a6b172.js"));
var FeatureCardGrid_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".container.svelte-1nfxxla.svelte-1nfxxla{display:flex;flex-wrap:wrap;gap:16px;justify-content:center}.horizontal-stack.svelte-1nfxxla.svelte-1nfxxla{display:flex;justify-content:start;list-style:none;gap:16px}.horizontal-stack.svelte-1nfxxla>.svelte-1nfxxla{border:1px var(--primary-color) solid;width:108px;height:376px;padding:10px}.horizontal-stack.svelte-1nfxxla>.left.svelte-1nfxxla{background-image:url(/photos/photo-charles-river-bw.jpeg);background-size:cover}.horizontal-stack.svelte-1nfxxla>.middle-left.svelte-1nfxxla{background-image:url(/photos/photo-charles-river-bw.jpeg);background-size:cover;background-position-x:-132px}.horizontal-stack.svelte-1nfxxla>.middle-right.svelte-1nfxxla{background-image:url(/photos/photo-charles-river-bw.jpeg);background-size:cover;background-position-x:-260px}.horizontal-stack.svelte-1nfxxla>.right.svelte-1nfxxla{background-image:url(/photos/photo-charles-river-bw.jpeg);background-size:cover;background-position:right;background-position-x:142px}.vertical-stack.svelte-1nfxxla.svelte-1nfxxla{display:flex;flex-direction:column;justify-content:start;list-style:none;gap:16px}.vertical-stack.svelte-1nfxxla>.svelte-1nfxxla{border:1px var(--primary-color) solid;height:65.5px;padding:10px;width:380px}.left.svelte-1nfxxla.svelte-1nfxxla::after,.middle-left.svelte-1nfxxla.svelte-1nfxxla::after,.middle-right.svelte-1nfxxla.svelte-1nfxxla::after,.right.svelte-1nfxxla.svelte-1nfxxla::after{content:'';position:absolute;left:0;top:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);z-index:2}ul.svelte-1nfxxla>li.svelte-1nfxxla{position:relative}.text.svelte-1nfxxla.svelte-1nfxxla{color:var(--primary-color);z-index:3;position:relative}li.svelte-1nfxxla.svelte-1nfxxla:hover{cursor:pointer;box-shadow:0 0 0 0 rgba(255, 255, 255, 1);animation:svelte-1nfxxla-grow-white 1.7s, svelte-1nfxxla-pulse-white 1.7s infinite;animation-fill-mode:forwards;transform:scale(1)}@keyframes svelte-1nfxxla-grow-white{40%{transform:scale(1.06)}100%{transform:scale(1.06)}}@keyframes svelte-1nfxxla-pulse-white{0%{box-shadow:0 0 0 0 rgba(255, 255, 255, 0.7)}100%{box-shadow:0 0 0 10px rgba(255, 255, 255, 0)}}li.svelte-1nfxxla.svelte-1nfxxla:active{animation:svelte-1nfxxla-strong-pulse-white 1s;animation-fill-mode:forwards}@keyframes svelte-1nfxxla-strong-pulse-white{0%{transform:scale(1.06);box-shadow:0 0 0 10px rgba(255, 255, 255, 0.7)}100%{transform:scale(1.06);box-shadow:0 0 0 10px rgba(255, 255, 255, 0)}}",
  map: null
};
const FeatureCardGrid = (0, import_index_d7a6b172.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"container svelte-1nfxxla"}"><div>What would you like to do?
		<ul class="${"horizontal-stack svelte-1nfxxla"}"><li class="${"left svelte-1nfxxla"}"><span class="${"text svelte-1nfxxla"}">Read Blog</span></li>
			<li class="${"middle-left svelte-1nfxxla"}"><span class="${"text svelte-1nfxxla"}">Find Events</span></li>
			<li class="${"middle-right svelte-1nfxxla"}"><span class="${"text svelte-1nfxxla"}">Answer Polls</span></li>
			<li class="${"right svelte-1nfxxla"}"><span class="${"text svelte-1nfxxla"}">View Photos</span></li></ul></div>
	<div>Featured
		<ul class="${"vertical-stack svelte-1nfxxla"}">${(0, import_index_d7a6b172.b)([
    "Latest Blog Post: Implementing Visitor Pattern in Rust",
    "Upcoming Event: Rust for Rustaceans Chapter 3 Discussion",
    "Poll: Recommend Software Engineering Book for Senior Devs?",
    'Latest Photo: "Downtown Boston Sunrise"'
  ], (text) => {
    return `<li class="${"svelte-1nfxxla"}">${(0, import_index_d7a6b172.e)(text)}</li>`;
  })}</ul></div>
</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-bc8okk{margin-top:49px}",
  map: null
};
const prerender = true;
const Routes = (0, import_index_d7a6b172.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}`, ""}

<section class="${"svelte-bc8okk"}">${(0, import_index_d7a6b172.v)(FeatureCardGrid, "FeatureCardGrid").$$render($$result, {}, {}, {})}
</section>`;
});
