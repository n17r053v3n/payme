# Payme

SvelteKit application for setteling debts amongst friends. Remember that there is no DB so use with localstorage enabled.

## Code

`/src/lib/scripts/transactions` and `/src/lib/scripts/users` are svelte stores and handle user and transaction data

`/src/lib/scripts/types` hold the application types

`/src/lib/scripts/calculate` hodls the algoryhm to settle up

`/src/lib/components` holds UI component files

`/src/routes/+page.svelte` is the backbone landing page file

to run the project locally run `npm run dev` node v18.17.1 should work 100% and anything v16+ except for 17.X versions shoudl work

The project is online at https://payme-8uh.pages.dev/

