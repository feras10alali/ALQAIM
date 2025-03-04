import { i as getContext, a as attr, e as escape_html, p as pop, b as push } from "../../chunks/index2.js";
import { s as stores } from "../../chunks/client.js";
import { l as logo } from "../../chunks/logo.js";
({
  check: stores.updated.check
});
function context() {
  return getContext("__request__");
}
const page$1 = {
  get error() {
    return context().page.error;
  },
  get status() {
    return context().page.status;
  }
};
const page = page$1;
const emojis = {
  // TODO add the rest!
  420: "🫠",
  500: "💥"
};
function _error($$payload, $$props) {
  push();
  $$payload.out += `<div class="flex flex-col w-[50%] h-full p-2 place-self-center text-center pt-[8%]">`;
  if (page.status) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="w-[18%]"><img${attr("src", logo)} class="w-[10%]" alt="logo"></div> <h1 class="text-textcolor"><span class="text-3xl">🤨</span>?trying to mess around</h1>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <h1>${escape_html(page.status)} ${escape_html(page.error.message)}</h1> <span style="font-size: 10em">${escape_html(emojis[page.status] ?? emojis[500])}</span></div>`;
  pop();
}
export {
  _error as default
};
