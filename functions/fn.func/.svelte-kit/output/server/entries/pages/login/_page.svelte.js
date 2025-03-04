import { a as attr, p as pop, b as push } from "../../../chunks/index2.js";
import { l as logo } from "../../../chunks/logo.js";
import "../../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  let email = "";
  let password = "";
  $$payload.out += `<div class="w-screen h-screen flex justify-center items-center p-4 pt-0"><div class="w-full max-w-lg flex justify-center items-center"><form class="flex flex-col justify-center items-center w-full"><div class="w-[16rem] mb-1 flex justify-center items-center"><img${attr("src", logo)} alt="Logo" class="object-center"></div> <div><h2 class="mt-2 mb-2 text-2xl text-textcolor">تسجيل الدخول إلى حسابك</h2></div> <div class="relative mt-1 mb-1.5 w-full"><input${attr("value", email)} id="email" type="email" class="block mt-1.5 py-[1.71%] w-full text-sm text-textcolor bg-transparent rounded-lg border-1 border-obj appearance-none text-textcolor border-obj focus:border-obj focus:outline-none focus:ring-0 focus:border-obj peer" placeholder=" " required> <label for="email" class="font-semibold absolute text-base text-textcolor duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-textcolor peer-focus:text-textcolor peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto focus:text-base start-1">البريد الإلكتروني</label></div> <div class="relative mt-1 mb-1.5 w-full"><button type="button" class="absolute inset-y-0 left-0 flex items-center px-2" aria-label="Toggle password visibility">`;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<svg class="w-6 h-6 duration-300 text-textcolor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>`;
  }
  $$payload.out += `<!--]--></button> <input${attr("value", password)} id="password"${attr("type", "password")} class="block mt-1.5 py-[1.71%] w-full text-sm text-textcolor bg-transparent rounded-lg border-1 border-obj appearance-none focus:border-obj focus:outline-none focus:ring-0 peer" placeholder=" " required> <label for="password" class="mr-1 font-semibold absolute text-base text-textcolor duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-textcolor peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">كلمة المرور</label></div> <label for="button" class="form-control mb-4 w-full mt-0 pt-0"><div class="label"><span class="label-text-alt text-sm font hover:text-textcolor2">هل نسيت كلمة المرور؟</span></div></label> <button type="submit" class="mt-0 mb-4 bg-buttons hover:bg-buttonhov text-white font-bold text-sm rounded-lg block w-full p-2.5">تسجيل الدخول</button> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <p class="label-text-alt text-lg">ليس لديك حساب؟ <span class="text-textcolor1 hover:text-textcolor2 hover:cursor-pointer"><a href="/register">قم بالتسجيل</a></span></p></form></div></div>`;
  pop();
}
export {
  _page as default
};
