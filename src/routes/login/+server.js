import { json } from '@sveltejs/kit';
import { serialize } from 'cookie';
import { createPocketBase } from '$lib/pocketbase';

export async function POST({ request, cookies }) {
    const { email, password } = await request.json();
    const { pb } = createPocketBase({ cookies });

    try {
        await pb.collection('users').authWithPassword(email, password);
        const user = pb.authStore.model;

        cookies.set('authcookie', pb.authStore.exportToCookie(), {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7
        });

        cookies.set('userFirstName', encodeURIComponent(JSON.stringify({ lastName: user.lastName || '' })), {
            path: '/',
            httpOnly: false,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7
        });

        cookies.set('userLastName', encodeURIComponent(JSON.stringify({ lastName: user.lastName || '' })), {
            path: '/',
            httpOnly: false,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7
        });

        const avatarValue = user.avatar || (user.firstName ? user.firstName.charAt(0) : '');
        
        cookies.set('userAvatar', encodeURIComponent(JSON.stringify({ avatar: avatarValue })), {
            path: '/',
            httpOnly: false,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7
        });

        // Set userID cookie using the property "id"
        cookies.set('userID', encodeURIComponent(JSON.stringify({ id: user.id || '' })), {
            path: '/',
            httpOnly: false,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7
        });

        return json({
            success: true,
            user: { 
                firstName: user.firstName, 
                lastName: user.lastName, 
                email: user.email,
                avatar: avatarValue,
                id: user.id
            }
        });
    } catch (err) {
        console.error("Login failed:", err);
        cookies.delete('authcookie', { path: '/' });
        cookies.delete('userFirstName', { path: '/' });
        cookies.delete('userAvatar', { path: '/' });
        cookies.delete('userID', { path: '/' });
        return json(
            { success: false, error: err.message || 'Invalid credentials' },
            { status: 401 }
        );
    }
}
