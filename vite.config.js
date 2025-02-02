import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'assets/css/app.css',
        'assets/css/templates/about.css',
        'assets/css/templates/album.css',
        'assets/css/templates/home.css',
        'assets/css/templates/note.css',
        'assets/js/app.js',
      ],
      refresh: [
        'site/templates/**',
        'site/snippets/**',
      ],
      publicDirectory: './',
    }),
  ],
});
