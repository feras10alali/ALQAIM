import { r as redirect, f as fail } from "../../../chunks/index.js";
import "pocketbase";
async function load({ locals }) {
  if (!locals.pb?.authStore?.isValid) {
    throw redirect(303, "/login");
  }
  return { user: locals.user };
}
const actions = {
  updateProfile: async ({ request, locals, cookies }) => {
    if (!locals.pb?.authStore?.isValid) {
      throw redirect(303, "/login");
    }
    const data = await request.formData();
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const email = data.get("email");
    try {
      const updatedUser = await locals.pb.collection("users").update(locals.user.id, { firstName, lastName, email });
      cookies.set("userFirstName", encodeURIComponent(JSON.stringify({ firstName })), {
        path: "/",
        httpOnly: false,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7
      });
      return { success: true, user: updatedUser };
    } catch (error) {
      console.error(error);
      return fail(400, { error: error.message });
    }
  },
  updatePassword: async ({ request, locals }) => {
    if (!locals.pb?.authStore?.isValid) {
      throw redirect(303, "/login");
    }
    const data = await request.formData();
    const password = data.get("password");
    const passwordConfirm = data.get("passwordConfirm");
    if (password !== passwordConfirm) {
      return fail(400, { error: "Passwords do not match" });
    }
    try {
      const updatedUser = await locals.pb.collection("users").update(locals.user.id, { password, passwordConfirm });
      return { success: true, user: updatedUser };
    } catch (error) {
      console.error(error);
      return fail(400, { error: error.message });
    }
  }
};
export {
  actions,
  load
};
