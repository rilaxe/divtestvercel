import { p as push, h as head, d as bind_props, c as pop } from './index-W4B46VWj.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean) return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(data.metadata.title)}</title>`;
    $$payload2.out += `<meta property="og:title"${attr("content", data.metadata.title)}> <meta property="og:description"${attr("content", data.metadata.description)}> <meta property="og:image"${attr("content", data.metadata.ogImage)}>`;
  });
  $$payload.out += `<h1>Hello my fans</h1> <img${attr("src", data.metadata.ogImage)}>`;
  bind_props($$props, { data });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CWjHHY0X.js.map
