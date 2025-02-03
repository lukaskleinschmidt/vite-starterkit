# vite-starterkit

This repository is based on the official [Kirby starterkit]([https://getkirby.com/docs/guide/tour](https://github.com/getkirby/starterkit). However it [has been modified](https://github.com/getkirby/starterkit/compare/main...lukaskleinschmidt:vite-starterkit:main) to use `vite` for processing Kirbys existing frontend assets (CSS and JS) via the [kirby-laravel-vite plugin](https://github.com/lukaskleinschmidt/kirby-laravel-vite).

## Installation

- Clone this repository and switch to the newly created folder
- Run `composer install` in the main folder to install all PHP dependencies
- Run `npm install` to install all JS dependencies
- **IMPORTANT:** Run `npm run build` once to initialize the necessary manifest file
- Run `npm run dev` to start the Vite development server (including hot reloading)
- Now you can edit the existing Kirby assets (in `assets/js` and `assets/css`) and Vite will register your changes and refresh your browser

> [!NOTE]
> You won't see your expected page when you open the URL that Vite reports in the console as `Local:   http://localhost:5173/`. This will only show a default page. If you want to see your Kirby page, you need to access it however you accessed your local Kirby installation before (e.g. via PHPs own serve command, Laravel Valet, MAMP/XAMP, etc). If you want to see this URL in the console, you can set the `APP_URL` environment variable accordingly.
