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
  manifest: () => manifest
});
const manifest = {
  appDir: "_app",
  assets: new Set([".DS_Store", "favicon.png", "fonts/Inconsolata/Inconsolata-VariableFont_wdth,wght.ttf", "fonts/Inconsolata/OFL.txt", "fonts/Inconsolata/README.txt", "fonts/Inconsolata/static/Inconsolata/Inconsolata-Black.ttf", "fonts/Inconsolata/static/Inconsolata/Inconsolata-Bold.ttf", "fonts/Inconsolata/static/Inconsolata/Inconsolata-ExtraBold.ttf", "fonts/Inconsolata/static/Inconsolata/Inconsolata-ExtraLight.ttf", "fonts/Inconsolata/static/Inconsolata/Inconsolata-Light.ttf", "fonts/Inconsolata/static/Inconsolata/Inconsolata-Medium.ttf", "fonts/Inconsolata/static/Inconsolata/Inconsolata-Regular.ttf", "fonts/Inconsolata/static/Inconsolata/Inconsolata-SemiBold.ttf", "fonts/Inconsolata/static/Inconsolata_Condensed/Inconsolata_Condensed-Black.ttf", "fonts/Inconsolata/static/Inconsolata_Condensed/Inconsolata_Condensed-Bold.ttf", "fonts/Inconsolata/static/Inconsolata_Condensed/Inconsolata_Condensed-ExtraBold.ttf", "fonts/Inconsolata/static/Inconsolata_Condensed/Inconsolata_Condensed-ExtraLight.ttf", "fonts/Inconsolata/static/Inconsolata_Condensed/Inconsolata_Condensed-Light.ttf", "fonts/Inconsolata/static/Inconsolata_Condensed/Inconsolata_Condensed-Medium.ttf", "fonts/Inconsolata/static/Inconsolata_Condensed/Inconsolata_Condensed-Regular.ttf", "fonts/Inconsolata/static/Inconsolata_Condensed/Inconsolata_Condensed-SemiBold.ttf", "fonts/Inconsolata/static/Inconsolata_Expanded/Inconsolata_Expanded-Black.ttf", "fonts/Inconsolata/static/Inconsolata_Expanded/Inconsolata_Expanded-Bold.ttf", "fonts/Inconsolata/static/Inconsolata_Expanded/Inconsolata_Expanded-ExtraBold.ttf", "fonts/Inconsolata/static/Inconsolata_Expanded/Inconsolata_Expanded-ExtraLight.ttf", "fonts/Inconsolata/static/Inconsolata_Expanded/Inconsolata_Expanded-Light.ttf", "fonts/Inconsolata/static/Inconsolata_Expanded/Inconsolata_Expanded-Medium.ttf", "fonts/Inconsolata/static/Inconsolata_Expanded/Inconsolata_Expanded-Regular.ttf", "fonts/Inconsolata/static/Inconsolata_Expanded/Inconsolata_Expanded-SemiBold.ttf", "fonts/Inconsolata/static/Inconsolata_ExtraCondensed/Inconsolata_ExtraCondensed-Black.ttf", "fonts/Inconsolata/static/Inconsolata_ExtraCondensed/Inconsolata_ExtraCondensed-Bold.ttf", "fonts/Inconsolata/static/Inconsolata_ExtraCondensed/Inconsolata_ExtraCondensed-ExtraBold.ttf", "fonts/Inconsolata/static/Inconsolata_ExtraCondensed/Inconsolata_ExtraCondensed-ExtraLight.ttf", "fonts/Inconsolata/static/Inconsolata_ExtraCondensed/Inconsolata_ExtraCondensed-Light.ttf", "fonts/Inconsolata/static/Inconsolata_ExtraCondensed/Inconsolata_ExtraCondensed-Medium.ttf", "fonts/Inconsolata/static/Inconsolata_ExtraCondensed/Inconsolata_ExtraCondensed-Regular.ttf", "fonts/Inconsolata/static/Inconsolata_ExtraCondensed/Inconsolata_ExtraCondensed-SemiBold.ttf", "fonts/Inconsolata/static/Inconsolata_ExtraExpanded/Inconsolata_ExtraExpanded-Black.ttf", "fonts/Inconsolata/static/Inconsolata_ExtraExpanded/Inconsolata_ExtraExpanded-Bold.ttf", "fonts/Inconsolata/static/Inconsolata_ExtraExpanded/Inconsolata_ExtraExpanded-ExtraBold.ttf", "fonts/Inconsolata/static/Inconsolata_ExtraExpanded/Inconsolata_ExtraExpanded-ExtraLight.ttf", "fonts/Inconsolata/static/Inconsolata_ExtraExpanded/Inconsolata_ExtraExpanded-Light.ttf", "fonts/Inconsolata/static/Inconsolata_ExtraExpanded/Inconsolata_ExtraExpanded-Medium.ttf", "fonts/Inconsolata/static/Inconsolata_ExtraExpanded/Inconsolata_ExtraExpanded-Regular.ttf", "fonts/Inconsolata/static/Inconsolata_ExtraExpanded/Inconsolata_ExtraExpanded-SemiBold.ttf", "fonts/Inconsolata/static/Inconsolata_SemiCondensed/Inconsolata_SemiCondensed-Black.ttf", "fonts/Inconsolata/static/Inconsolata_SemiCondensed/Inconsolata_SemiCondensed-Bold.ttf", "fonts/Inconsolata/static/Inconsolata_SemiCondensed/Inconsolata_SemiCondensed-ExtraBold.ttf", "fonts/Inconsolata/static/Inconsolata_SemiCondensed/Inconsolata_SemiCondensed-ExtraLight.ttf", "fonts/Inconsolata/static/Inconsolata_SemiCondensed/Inconsolata_SemiCondensed-Light.ttf", "fonts/Inconsolata/static/Inconsolata_SemiCondensed/Inconsolata_SemiCondensed-Medium.ttf", "fonts/Inconsolata/static/Inconsolata_SemiCondensed/Inconsolata_SemiCondensed-Regular.ttf", "fonts/Inconsolata/static/Inconsolata_SemiCondensed/Inconsolata_SemiCondensed-SemiBold.ttf", "fonts/Inconsolata/static/Inconsolata_SemiExpanded/Inconsolata_SemiExpanded-Black.ttf", "fonts/Inconsolata/static/Inconsolata_SemiExpanded/Inconsolata_SemiExpanded-Bold.ttf", "fonts/Inconsolata/static/Inconsolata_SemiExpanded/Inconsolata_SemiExpanded-ExtraBold.ttf", "fonts/Inconsolata/static/Inconsolata_SemiExpanded/Inconsolata_SemiExpanded-ExtraLight.ttf", "fonts/Inconsolata/static/Inconsolata_SemiExpanded/Inconsolata_SemiExpanded-Light.ttf", "fonts/Inconsolata/static/Inconsolata_SemiExpanded/Inconsolata_SemiExpanded-Medium.ttf", "fonts/Inconsolata/static/Inconsolata_SemiExpanded/Inconsolata_SemiExpanded-Regular.ttf", "fonts/Inconsolata/static/Inconsolata_SemiExpanded/Inconsolata_SemiExpanded-SemiBold.ttf", "fonts/Inconsolata/static/Inconsolata_UltraCondensed/Inconsolata_UltraCondensed-Black.ttf", "fonts/Inconsolata/static/Inconsolata_UltraCondensed/Inconsolata_UltraCondensed-Bold.ttf", "fonts/Inconsolata/static/Inconsolata_UltraCondensed/Inconsolata_UltraCondensed-ExtraBold.ttf", "fonts/Inconsolata/static/Inconsolata_UltraCondensed/Inconsolata_UltraCondensed-ExtraLight.ttf", "fonts/Inconsolata/static/Inconsolata_UltraCondensed/Inconsolata_UltraCondensed-Light.ttf", "fonts/Inconsolata/static/Inconsolata_UltraCondensed/Inconsolata_UltraCondensed-Medium.ttf", "fonts/Inconsolata/static/Inconsolata_UltraCondensed/Inconsolata_UltraCondensed-Regular.ttf", "fonts/Inconsolata/static/Inconsolata_UltraCondensed/Inconsolata_UltraCondensed-SemiBold.ttf", "fonts/Inconsolata/static/Inconsolata_UltraExpanded/Inconsolata_UltraExpanded-Black.ttf", "fonts/Inconsolata/static/Inconsolata_UltraExpanded/Inconsolata_UltraExpanded-Bold.ttf", "fonts/Inconsolata/static/Inconsolata_UltraExpanded/Inconsolata_UltraExpanded-ExtraBold.ttf", "fonts/Inconsolata/static/Inconsolata_UltraExpanded/Inconsolata_UltraExpanded-ExtraLight.ttf", "fonts/Inconsolata/static/Inconsolata_UltraExpanded/Inconsolata_UltraExpanded-Light.ttf", "fonts/Inconsolata/static/Inconsolata_UltraExpanded/Inconsolata_UltraExpanded-Medium.ttf", "fonts/Inconsolata/static/Inconsolata_UltraExpanded/Inconsolata_UltraExpanded-Regular.ttf", "fonts/Inconsolata/static/Inconsolata_UltraExpanded/Inconsolata_UltraExpanded-SemiBold.ttf", "photos/photo-airplane-trip.jpeg", "photos/photo-berries.jpeg", "photos/photo-boston-building.jpeg", "photos/photo-boston-downtown.jpeg", "photos/photo-boston-trees.jpeg", "photos/photo-cambridge-boston-charles-river.jpeg", "photos/photo-cambridge-boston-charles.jpeg", "photos/photo-charles-river-bw.jpeg", "photos/photo-city-buildings.jpeg", "photos/photo-flower.jpeg", "photos/photo-foggy-charles-river.jpeg", "photos/photo-lambertville-river.jpeg", "photos/photo-long-walk-boston-sunset.jpeg", "photos/photo-plant-french-press.jpeg", "robots.txt", "svelte-welcome.png", "svelte-welcome.webp"]),
  _: {
    mime: { ".png": "image/png", ".ttf": "font/ttf", ".txt": "text/plain", ".jpeg": "image/jpeg", ".webp": "image/webp" },
    entry: { "file": "start-bd20c507.js", "js": ["start-bd20c507.js", "chunks/vendor-1f4dc2d3.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toModule(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/5.js")))
    ],
    routes: [
      {
        type: "page",
        pattern: /^\/$/,
        params: null,
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/index_old\/?$/,
        params: null,
        path: "/index_old",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/about\/?$/,
        params: null,
        path: "/about",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "endpoint",
        pattern: /^\/todos\.json$/,
        params: null,
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/todos/index.json.ts.js")))
      },
      {
        type: "page",
        pattern: /^\/todos\/?$/,
        params: null,
        path: "/todos",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "endpoint",
        pattern: /^\/todos\/([^/]+?)\.json$/,
        params: (m) => ({ uid: m[1] }),
        load: () => Promise.resolve().then(() => __toModule(require("./entries/endpoints/todos/_uid_.json.ts.js")))
      }
    ]
  }
};
