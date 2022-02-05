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
  default: () => Index_old,
  prerender: () => prerender
});
var import_index_d7a6b172 = __toModule(require("../../chunks/index-d7a6b172.js"));
const subscriber_queue = [];
function writable(value, start = import_index_d7a6b172.n) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if ((0, import_index_d7a6b172.d)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = import_index_d7a6b172.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_d7a6b172.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = (0, import_index_d7a6b172.f)();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = (0, import_index_d7a6b172.f)();
      cancel_task = false;
      task = (0, import_index_d7a6b172.l)((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
var Counter_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".counter.svelte-ppn7h8.svelte-ppn7h8{display:flex;border-top:1px solid rgba(0, 0, 0, 0.1);border-bottom:1px solid rgba(0, 0, 0, 0.1);margin:1rem 0}.counter.svelte-ppn7h8 button.svelte-ppn7h8{width:2em;padding:0;display:flex;align-items:center;justify-content:center;border:0;background-color:transparent;color:var(--text-color);font-size:2rem}.counter.svelte-ppn7h8 button.svelte-ppn7h8:hover{background-color:var(--secondary-color)}svg.svelte-ppn7h8.svelte-ppn7h8{width:25%;height:25%}path.svelte-ppn7h8.svelte-ppn7h8{vector-effect:non-scaling-stroke;stroke-width:2px;stroke:var(--text-color)}.counter-viewport.svelte-ppn7h8.svelte-ppn7h8{width:8em;height:4em;overflow:hidden;text-align:center;position:relative}.counter-viewport.svelte-ppn7h8 strong.svelte-ppn7h8{position:absolute;display:flex;width:100%;height:100%;font-weight:400;color:var(--accent-color);font-size:4rem;align-items:center;justify-content:center}.counter-digits.svelte-ppn7h8.svelte-ppn7h8{position:absolute;width:100%;height:100%}.hidden.svelte-ppn7h8.svelte-ppn7h8{top:-100%;user-select:none}",
  map: null
};
function modulo(n, m) {
  return (n % m + m) % m;
}
const Counter = (0, import_index_d7a6b172.c)(($$result, $$props, $$bindings, slots) => {
  let offset;
  let $displayed_count, $$unsubscribe_displayed_count;
  let count = 0;
  const displayed_count = spring();
  $$unsubscribe_displayed_count = (0, import_index_d7a6b172.a)(displayed_count, (value) => $displayed_count = value);
  $$result.css.add(css$1);
  {
    displayed_count.set(count);
  }
  offset = modulo($displayed_count, 1);
  $$unsubscribe_displayed_count();
  return `<div class="${"counter svelte-ppn7h8"}"><button aria-label="${"Decrease the counter by one"}" class="${"svelte-ppn7h8"}"><svg aria-hidden="${"true"}" viewBox="${"0 0 1 1"}" class="${"svelte-ppn7h8"}"><path d="${"M0,0.5 L1,0.5"}" class="${"svelte-ppn7h8"}"></path></svg></button>

	<div class="${"counter-viewport svelte-ppn7h8"}"><div class="${"counter-digits svelte-ppn7h8"}" style="${"transform: translate(0, " + (0, import_index_d7a6b172.e)(100 * offset) + "%)"}"><strong class="${"hidden svelte-ppn7h8"}" aria-hidden="${"true"}">${(0, import_index_d7a6b172.e)(Math.floor($displayed_count + 1))}</strong>
			<strong class="${"svelte-ppn7h8"}">${(0, import_index_d7a6b172.e)(Math.floor($displayed_count))}</strong></div></div>

	<button aria-label="${"Increase the counter by one"}" class="${"svelte-ppn7h8"}"><svg aria-hidden="${"true"}" viewBox="${"0 0 1 1"}" class="${"svelte-ppn7h8"}"><path d="${"M0,0.5 L1,0.5 M0.5,0 L0.5,1"}" class="${"svelte-ppn7h8"}"></path></svg></button>
</div>`;
});
var index_old_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-mjk9ig.svelte-mjk9ig{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}h1.svelte-mjk9ig.svelte-mjk9ig{width:100%}.welcome.svelte-mjk9ig.svelte-mjk9ig{position:relative;width:100%;height:0;padding:0 0 calc(100% * 495 / 2048) 0}.welcome.svelte-mjk9ig img.svelte-mjk9ig{position:absolute;width:100%;height:100%;top:0;display:block}",
  map: null
};
const prerender = true;
const Index_old = (0, import_index_d7a6b172.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}`, ""}

<section class="${"svelte-mjk9ig"}"><h1 class="${"svelte-mjk9ig"}"><div class="${"welcome svelte-mjk9ig"}"><picture><source srcset="${"svelte-welcome.webp"}" type="${"image/webp"}">
				<img src="${"svelte-welcome.png"}" alt="${"Welcome"}" class="${"svelte-mjk9ig"}"></picture></div>

		to your new<br>SvelteKit app
	</h1>

	<h2>try editing <strong>src/routes/index.svelte</strong></h2>

	${(0, import_index_d7a6b172.v)(Counter, "Counter").$$render($$result, {}, {}, {})}
</section>`;
});
