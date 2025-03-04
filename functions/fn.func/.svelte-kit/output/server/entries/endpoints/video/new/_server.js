import { r as redirect } from "../../../../chunks/index.js";
async function GET({ locals }) {
  if (!locals.pb || !locals.pb.authStore.isValid) {
    throw redirect(303, "/login");
  }
  const user = locals.pb.authStore.model;
  if (!user || user.role !== "admin") {
    throw redirect(303, "/unauthorized");
  }
  return { message: "Welcome, Admin!" };
}
export {
  GET
};
