import { redirect } from '@sveltejs/kit';

export async function load({ cookies, locals }) {
  // Redirect to /login if the user is not authenticated
  if (!locals.pb?.authStore?.isValid) {
    throw redirect(303, '/login');
  }

  // Retrieve the user firstName and avatar cookies
  
  const firstNameCookie = cookies.get('userFirstName');
  const lastNameCookie = cookies.get('userLastName');
  const avatarCookie = cookies.get('userAvatar');
  const idCookie = cookies.get('userID');


  const firstName = firstNameCookie
    ? JSON.parse(decodeURIComponent(firstNameCookie)).firstName
    : '';
  const lastName = lastNameCookie
    ? JSON.parse(decodeURIComponent(lastNameCookie)).lastName
    : '';
  const avatar = avatarCookie
    ? JSON.parse(decodeURIComponent(avatarCookie)).avatar
    : '';
  const id = idCookie
    ? JSON.parse(decodeURIComponent(idCookie)).id
    : '';

  return { user: { firstName, lastName, avatar, id } };
}
