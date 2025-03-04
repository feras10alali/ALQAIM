import PocketBase from "pocketbase";
const PRIVATE_POCKETBASE_URL = "http://127.0.0.1:8090/";
function createPocketBase(event) {
  const pb = new PocketBase(PRIVATE_POCKETBASE_URL);
  const authCookie = event.cookies.get("authcookie");
  let clearAuthCookie = false;
  if (authCookie) {
    try {
      pb.authStore.loadFromCookie(authCookie);
      pb.collection("users").authRefresh().catch(() => {
        pb.authStore.clear();
        clearAuthCookie = true;
      });
    } catch (error) {
      console.error("Error loading auth cookie:", error);
      pb.authStore.clear();
      clearAuthCookie = true;
    }
  }
  return { pb, clearAuthCookie };
}
export {
  createPocketBase as c
};
