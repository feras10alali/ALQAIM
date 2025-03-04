import { r as redirect, j as json } from "../../../../chunks/index.js";
async function GET({ locals }) {
  if (!locals.pb || !locals.pb.authStore.isValid) {
    throw redirect(303, "/login");
  }
  return json({ message: "Welcome to the protected route!" });
}
export {
  GET
};
