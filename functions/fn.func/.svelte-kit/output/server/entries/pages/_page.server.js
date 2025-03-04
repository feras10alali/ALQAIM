import { r as redirect } from "../../chunks/index.js";
async function load({ locals }) {
  if (!locals.pb?.authStore?.isValid) {
    throw redirect(303, "/login");
  }
}
export {
  load
};
