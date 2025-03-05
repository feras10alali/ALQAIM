import PocketBase from 'pocketbase';
import { PRIVATE_POCKETBASE_URL } from '$env/static/private';

export function createPocketBase(event) {
    const pb = new PocketBase(PRIVATE_POCKETBASE_URL);
    const authCookie = event.cookies.get('authcookie');
    let clearAuthCookie = false;

    if (authCookie) {
        try {
            pb.authStore.loadFromCookie(authCookie);

            // Ensure the PocketBase instance is returned before async operations
            pb.collection('users')
                .authRefresh()
                .catch(() => {
                    pb.authStore.clear();
                    clearAuthCookie = true;
                });

        } catch (error) {
            console.error('Error loading auth cookie:', error);
            pb.authStore.clear();
            clearAuthCookie = true;
        }
    }

    return { pb, clearAuthCookie };
}
