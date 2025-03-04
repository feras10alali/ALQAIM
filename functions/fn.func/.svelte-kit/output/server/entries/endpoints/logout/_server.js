import { r as redirect } from "../../../chunks/index.js";
import { c as createPocketBase } from "../../../chunks/pocketbase.js";
async function POST({ cookies }) {
  const { pb } = createPocketBase({ cookies });
  pb.authStore.clear();
  cookies.delete("authcookie", { path: "/" });
  cookies.delete("userFirstName", { path: "/" });
  cookies.delete("userLastName", { path: "/" });
  cookies.delete("userAvatar", { path: "/" });
  cookies.delete("userID", { path: "/" });
  throw redirect(303, "/login");
}
export {
  POST
};
