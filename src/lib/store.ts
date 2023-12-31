// import { writable } from 'svelte/store';
import { persisted } from 'svelte-local-storage-store';

import type { Product } from './types';

// normal store:
// export const cart = writable([] as Product[]);

// persisted store:
export const cart = persisted('cart', [] as Product[]);
