var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
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
  default: () => Events,
  prerender: () => prerender
});
var import_index_ced29248 = __toModule(require("../../chunks/index-ced29248.js"));
var import_share_fill = __toModule(require("@iconify/icons-eva/share-fill.js"));
var import_index_4fca056e = __toModule(require("../../chunks/index-4fca056e.js"));
var iconDefaults = Object.freeze({
  left: 0,
  top: 0,
  width: 16,
  height: 16,
  rotate: 0,
  vFlip: false,
  hFlip: false
});
function fullIcon(data) {
  return __spreadValues(__spreadValues({}, iconDefaults), data);
}
var defaults = Object.freeze({
  inline: false,
  width: null,
  height: null,
  hAlign: "center",
  vAlign: "middle",
  slice: false,
  hFlip: false,
  vFlip: false,
  rotate: 0
});
function mergeCustomisations(defaults2, item) {
  const result = {};
  for (const key in defaults2) {
    const attr = key;
    result[attr] = defaults2[attr];
    if (item[attr] === void 0) {
      continue;
    }
    const value = item[attr];
    switch (attr) {
      case "inline":
      case "slice":
        if (typeof value === "boolean") {
          result[attr] = value;
        }
        break;
      case "hFlip":
      case "vFlip":
        if (value === true) {
          result[attr] = !result[attr];
        }
        break;
      case "hAlign":
      case "vAlign":
        if (typeof value === "string" && value !== "") {
          result[attr] = value;
        }
        break;
      case "width":
      case "height":
        if (typeof value === "string" && value !== "" || typeof value === "number" && value || value === null) {
          result[attr] = value;
        }
        break;
      case "rotate":
        if (typeof value === "number") {
          result[attr] += value;
        }
        break;
    }
  }
  return result;
}
var separator = /[\s,]+/;
function flipFromString(custom, flip) {
  flip.split(separator).forEach((str) => {
    const value = str.trim();
    switch (value) {
      case "horizontal":
        custom.hFlip = true;
        break;
      case "vertical":
        custom.vFlip = true;
        break;
    }
  });
}
function alignmentFromString(custom, align) {
  align.split(separator).forEach((str) => {
    const value = str.trim();
    switch (value) {
      case "left":
      case "center":
      case "right":
        custom.hAlign = value;
        break;
      case "top":
      case "middle":
      case "bottom":
        custom.vAlign = value;
        break;
      case "slice":
      case "crop":
        custom.slice = true;
        break;
      case "meet":
        custom.slice = false;
    }
  });
}
function rotateFromString(value, defaultValue = 0) {
  const units = value.replace(/^-?[0-9.]*/, "");
  function cleanup(value2) {
    while (value2 < 0) {
      value2 += 4;
    }
    return value2 % 4;
  }
  if (units === "") {
    const num = parseInt(value);
    return isNaN(num) ? 0 : cleanup(num);
  } else if (units !== value) {
    let split = 0;
    switch (units) {
      case "%":
        split = 25;
        break;
      case "deg":
        split = 90;
    }
    if (split) {
      let num = parseFloat(value.slice(0, value.length - units.length));
      if (isNaN(num)) {
        return 0;
      }
      num = num / split;
      return num % 1 === 0 ? cleanup(num) : 0;
    }
  }
  return defaultValue;
}
var unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
var unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision === void 0 ? 100 : precision;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}
function preserveAspectRatio(props) {
  let result = "";
  switch (props.hAlign) {
    case "left":
      result += "xMin";
      break;
    case "right":
      result += "xMax";
      break;
    default:
      result += "xMid";
  }
  switch (props.vAlign) {
    case "top":
      result += "YMin";
      break;
    case "bottom":
      result += "YMax";
      break;
    default:
      result += "YMid";
  }
  result += props.slice ? " slice" : " meet";
  return result;
}
function iconToSVG(icon, customisations) {
  const box = {
    left: icon.left,
    top: icon.top,
    width: icon.width,
    height: icon.height
  };
  let body = icon.body;
  [icon, customisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push("translate(" + (box.width + box.left) + " " + (0 - box.top) + ")");
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push("translate(" + (0 - box.left) + " " + (box.height + box.top) + ")");
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift("rotate(90 " + tempValue + " " + tempValue + ")");
        break;
      case 2:
        transformations.unshift("rotate(180 " + (box.width / 2 + box.left) + " " + (box.height / 2 + box.top) + ")");
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift("rotate(-90 " + tempValue + " " + tempValue + ")");
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== 0 || box.top !== 0) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = '<g transform="' + transformations.join(" ") + '">' + body + "</g>";
    }
  });
  let width, height;
  if (customisations.width === null && customisations.height === null) {
    height = "1em";
    width = calculateSize(height, box.width / box.height);
  } else if (customisations.width !== null && customisations.height !== null) {
    width = customisations.width;
    height = customisations.height;
  } else if (customisations.height !== null) {
    height = customisations.height;
    width = calculateSize(height, box.width / box.height);
  } else {
    width = customisations.width;
    height = calculateSize(width, box.height / box.width);
  }
  if (width === "auto") {
    width = box.width;
  }
  if (height === "auto") {
    height = box.height;
  }
  width = typeof width === "string" ? width : width + "";
  height = typeof height === "string" ? height : height + "";
  const result = {
    attributes: {
      width,
      height,
      preserveAspectRatio: preserveAspectRatio(customisations),
      viewBox: box.left + " " + box.top + " " + box.width + " " + box.height
    },
    body
  };
  if (customisations.inline) {
    result.inline = true;
  }
  return result;
}
var regex = /\sid="(\S+)"/g;
var randomPrefix = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
var counter = 0;
function replaceIDs(body, prefix = randomPrefix) {
  const ids = [];
  let match;
  while (match = regex.exec(body)) {
    ids.push(match[1]);
  }
  if (!ids.length) {
    return body;
  }
  ids.forEach((id) => {
    const newID = typeof prefix === "function" ? prefix(id) : prefix + counter++;
    const escapedID = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    body = body.replace(new RegExp('([#;"])(' + escapedID + ')([")]|\\.[a-z])', "g"), "$1" + newID + "$3");
  });
  return body;
}
const svgDefaults = {
  "xmlns": "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": true,
  "role": "img"
};
function render(icon, props) {
  const customisations = mergeCustomisations(defaults, props);
  const componentProps = __spreadValues({}, svgDefaults);
  let style = typeof props.style === "string" ? props.style : "";
  for (let key in props) {
    const value = props[key];
    if (value === void 0) {
      continue;
    }
    switch (key) {
      case "icon":
      case "style":
      case "onLoad":
        break;
      case "inline":
      case "hFlip":
      case "vFlip":
        customisations[key] = value === true || value === "true" || value === 1;
        break;
      case "flip":
        if (typeof value === "string") {
          flipFromString(customisations, value);
        }
        break;
      case "align":
        if (typeof value === "string") {
          alignmentFromString(customisations, value);
        }
        break;
      case "color":
        style = style + (style.length > 0 && style.trim().slice(-1) !== ";" ? ";" : "") + "color: " + value + "; ";
        break;
      case "rotate":
        if (typeof value === "string") {
          customisations[key] = rotateFromString(value);
        } else if (typeof value === "number") {
          customisations[key] = value;
        }
        break;
      case "ariaHidden":
      case "aria-hidden":
        if (value !== true && value !== "true") {
          delete componentProps["aria-hidden"];
        }
        break;
      default:
        if (key.slice(0, 3) === "on:") {
          break;
        }
        if (defaults[key] === void 0) {
          componentProps[key] = value;
        }
    }
  }
  const item = iconToSVG(icon, customisations);
  for (let key in item.attributes) {
    componentProps[key] = item.attributes[key];
  }
  if (item.inline) {
    style = "vertical-align: -0.125em; " + style;
  }
  if (style !== "") {
    componentProps.style = style;
  }
  let localCounter = 0;
  let id = props.id;
  if (typeof id === "string") {
    id = id.replace(/-/g, "_");
  }
  return {
    attributes: componentProps,
    body: replaceIDs(item.body, id ? () => id + "ID" + localCounter++ : "iconifySvelte")
  };
}
const storage = Object.create(null);
function generateIcon(props) {
  const icon = typeof props.icon === "string" ? storage[props.icon] : typeof props.icon === "object" ? fullIcon(props.icon) : null;
  if (icon === null || typeof icon !== "object" || typeof icon.body !== "string") {
    return null;
  }
  return render(icon, props);
}
const OfflineIcon = (0, import_index_ced29248.c)(($$result, $$props, $$bindings, slots) => {
  let data;
  {
    {
      data = generateIcon($$props);
    }
  }
  return `${data !== null ? `<svg${(0, import_index_ced29248.h)([(0, import_index_ced29248.i)(data.attributes)], {})}><!-- HTML_TAG_START -->${data.body}<!-- HTML_TAG_END --></svg>` : ``}`;
});
const time = (0, import_index_4fca056e.r)(new Date(), function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1e3);
  return function stop() {
    clearInterval(interval);
  };
});
var EventCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".event__details.svelte-lltmf6{line-height:24px;white-space:nowrap;border:1px solid white;margin-bottom:16px;padding-top:16px;padding-bottom:16px}.event__datetime.svelte-lltmf6{color:var(--secondary-color);text-transform:uppercase}.event__time-until.svelte-lltmf6{margin-bottom:16px}.event__thumbnail.svelte-lltmf6{height:60px;width:60px;object-fit:cover;object-position:100% -10px;border-radius:10%}.event__share-button.svelte-lltmf6{align-self:flex-end}.event__share-button.svelte-lltmf6:hover>svg{cursor:pointer;box-shadow:0 0 0 0 rgba(255, 255, 255, 1);animation:svelte-lltmf6-pulse-white 1.7s infinite;animation-fill-mode:forwards;transform:scale(1)}.event__group.svelte-lltmf6{color:gray}@keyframes svelte-lltmf6-pulse-white{0%{box-shadow:0 0 0 0 rgba(255, 255, 255, 0.7)}100%{box-shadow:0 0 0 5px rgba(255, 255, 255, 0)}}",
  map: null
};
function formatDatetimeFromMs(ms) {
  return new Date(ms).toLocaleDateString(void 0, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
const EventCard = (0, import_index_ced29248.c)(($$result, $$props, $$bindings, slots) => {
  let daysUntilEvent;
  let formattedDatetime;
  let $time, $$unsubscribe_time;
  $$unsubscribe_time = (0, import_index_ced29248.a)(time, (value) => $time = value);
  let { groupName } = $$props;
  let { name } = $$props;
  let { thumbnailUrl } = $$props;
  let { thumbnailAlt } = $$props;
  let { datetimeInMs } = $$props;
  let { recurs = void 0 } = $$props;
  if ($$props.groupName === void 0 && $$bindings.groupName && groupName !== void 0)
    $$bindings.groupName(groupName);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.thumbnailUrl === void 0 && $$bindings.thumbnailUrl && thumbnailUrl !== void 0)
    $$bindings.thumbnailUrl(thumbnailUrl);
  if ($$props.thumbnailAlt === void 0 && $$bindings.thumbnailAlt && thumbnailAlt !== void 0)
    $$bindings.thumbnailAlt(thumbnailAlt);
  if ($$props.datetimeInMs === void 0 && $$bindings.datetimeInMs && datetimeInMs !== void 0)
    $$bindings.datetimeInMs(datetimeInMs);
  if ($$props.recurs === void 0 && $$bindings.recurs && recurs !== void 0)
    $$bindings.recurs(recurs);
  $$result.css.add(css$1);
  daysUntilEvent = Math.round((datetimeInMs - $time.getTime()) / (1e3 * 60 * 60 * 24));
  formattedDatetime = formatDatetimeFromMs(datetimeInMs);
  $$unsubscribe_time();
  return `<div class="${"row"}"><div class="${"col-12 event__details svelte-lltmf6"}"><div class="${"row"}"><div class="${"col-sm-6 col-xs-12 event__datetime svelte-lltmf6"}">${(0, import_index_ced29248.e)(formattedDatetime)}</div>
			<div class="${"col-sm-6 col-xs-12 text-sm-right event__time-until svelte-lltmf6"}">Starts in ${(0, import_index_ced29248.e)(daysUntilEvent)} days
			</div></div>
		<div class="${"row"}"><div class="${"col-md-5 col-sm-12"}"><div class="${"row"}"><div class="${"col-12"}">${(0, import_index_ced29248.e)(name)}</div>
					<div class="${"col-12 event__group svelte-lltmf6"}">${(0, import_index_ced29248.e)(groupName)}</div></div></div>
			<div class="${"col-md-4 col-sm-4"}"><img class="${"event__thumbnail svelte-lltmf6"}"${(0, import_index_ced29248.j)("src", thumbnailUrl, 0)}${(0, import_index_ced29248.j)("alt", thumbnailAlt, 0)}></div>
			<div class="${"col-md-3 col-sm-8 text-center text-sm-right text-xs-center event__share-button svelte-lltmf6"}">${(0, import_index_ced29248.v)(OfflineIcon, "Icon").$$render($$result, { icon: import_share_fill.default }, {}, {})}</div></div></div></div>

`;
});
var events_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-bc8okk{margin-top:49px}",
  map: null
};
const prerender = true;
const Events = (0, import_index_ced29248.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Events | rustbinaries.com</title>`, ""}`, ""}

<section class="${"svelte-bc8okk"}"><div class="${"container-fluid"}"><div class="${"row justify-content-center"}"><div class="${"col-12"}"><h3 class="${"event-list__header"}">Next Event</h3>
				${(0, import_index_ced29248.v)(EventCard, "EventCard").$$render($$result, {
    groupName: "Rust DC",
    name: "Book Club: Rust for Rustaceans",
    datetimeInMs: new Date(2022, 1, 10, 19, 0, 0).getTime(),
    thumbnailUrl: "/photos/photo-rust-ferris.jpeg",
    thumbnailAlt: "ferris, the crab mascot of rust, painted with water-color",
    recurs: "biweekly"
  }, {}, {})}</div>
			<div class="${"col-12"}"><h3 class="${"event-list__header"}">Upcoming Events</h3>
				${(0, import_index_ced29248.v)(EventCard, "EventCard").$$render($$result, {
    groupName: "Rust DC",
    name: "Book Club: Rust for Rustaceans",
    datetimeInMs: new Date(2022, 1, 24, 19, 0, 0).getTime(),
    thumbnailUrl: "/photos/photo-rust-ferris.jpeg",
    thumbnailAlt: "ferris, the crab mascot of rust, painted with water-color",
    recurs: "biweekly"
  }, {}, {})}
				${(0, import_index_ced29248.v)(EventCard, "EventCard").$$render($$result, {
    groupName: "Rust DC",
    name: "Book Club: Rust for Rustaceans",
    datetimeInMs: new Date(2022, 2, 3, 19, 0, 0).getTime(),
    thumbnailUrl: "/photos/photo-rust-ferris.jpeg",
    thumbnailAlt: "ferris, the crab mascot of rust, painted with water-color",
    recurs: "biweekly"
  }, {}, {})}
				${(0, import_index_ced29248.v)(EventCard, "EventCard").$$render($$result, {
    groupName: "Mock Group",
    name: "Mock event name",
    datetimeInMs: new Date(2022, 3, 3, 19, 0, 0).getTime(),
    thumbnailUrl: "/photos/photo-rust-ferris.jpeg",
    thumbnailAlt: "ferris, the crab mascot of rust, painted with water-color"
  }, {}, {})}</div></div></div>
</section>`;
});
