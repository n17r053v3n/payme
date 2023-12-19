import { writable } from 'svelte/store';
import type { User } from './types';
import { browser } from '$app/environment';

// const underConstruction = writable(boolean)

let users: User[] = [];
let id = 0;
if (browser) {
	if (typeof localStorage.getItem('users') === 'string') {
		users = JSON.parse(localStorage.getItem('users') as string);
	}
	if (typeof localStorage.getItem('maxId') === 'string') {
		id = parseInt(localStorage.getItem('maxId') as string);
	}
}

const userFunc = () => {
	const { subscribe, set } = writable(users);

	return {
		subscribe,
		add: (name: string) => {
			set((users = [...users, { name, id }]));
			id++;
			localStorage.setItem('users', JSON.stringify(users));
			localStorage.setItem('maxId', id.toString());
		}
	};
};

export const manageUsers = userFunc();
