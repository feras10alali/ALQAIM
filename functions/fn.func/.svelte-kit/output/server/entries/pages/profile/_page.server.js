import { r as redirect, f as fail } from "../../../chunks/index.js";
import "pocketbase";
async function load({ locals, cookies }) {
  if (!locals.pb?.authStore?.isValid) {
    throw redirect(303, "/login");
  }
  const avatarCookie = cookies.get("userAvatar");
  let avatar = "";
  if (avatarCookie) {
    avatar = JSON.parse(decodeURIComponent(avatarCookie)).avatar;
  }
  return { user: locals.user, avatar };
}
const actions = {
  updateAvatar: async ({ request, locals, cookies }) => {
    if (!locals.pb?.authStore?.isValid) {
      throw redirect(303, "/login");
    }
    const data = await request.formData();
    const avatarFile = data.get("avatar");
    if (!avatarFile) {
      return fail(400, { error: "No avatar file provided" });
    }
    try {
      const updatedUser = await locals.pb.collection("users").update(locals.user.id, { avatar: avatarFile });
      cookies.set(
        "userAvatar",
        encodeURIComponent(JSON.stringify({ avatar: updatedUser.avatar })),
        {
          path: "/",
          httpOnly: false,
          sameSite: "strict",
          secure: process.env.NODE_ENV === "production",
          maxAge: 60 * 60 * 24 * 7
          // 1 week
        }
      );
      return { success: true, user: updatedUser };
    } catch (error) {
      console.error("Avatar update error:", error);
      return fail(400, { error: error.message });
    }
  }
  // Other actions (updateProfile, updatePassword, etc.)
};
export {
  actions,
  load
};
