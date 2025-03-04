import { j as json } from "../../../chunks/index.js";
import { c as createPocketBase } from "../../../chunks/pocketbase.js";
async function POST({ request, cookies }) {
  try {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const avatar = data.get("avatar");
    const userData = {
      email,
      password,
      passwordConfirm: password,
      firstName,
      lastName,
      role: "user"
    };
    if (avatar) {
      userData.avatar = avatar;
    }
    const { pb } = createPocketBase({ cookies });
    await pb.collection("users").create(userData);
    await pb.collection("users").authWithPassword(email, password);
    cookies.set("authcookie", pb.authStore.exportToCookie(), {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7
    });
    return json({ success: true });
  } catch (err) {
    return json({ success: false, error: err.message || "Registration error" }, { status: 400 });
  }
}
export {
  POST
};
