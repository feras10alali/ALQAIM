import { writable } from 'svelte/store';

export const lang = writable(localStorage.getItem('lang') || 'en');

lang.subscribe((value) => {
    localStorage.setItem('lang', value);
    document.documentElement.lang = value;
    document.documentElement.dir = value === 'ar' ? 'rtl' : 'ltr';
});
