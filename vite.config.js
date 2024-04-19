/** @type {import('vite').UserConfig} */

import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'home/index.html'),
        signup: resolve(__dirname, 'signup/index.html'),
        books: resolve(__dirname, 'books/index.html'),
        book_idk: resolve(__dirname, 'books/idk/index.html'),
        music: resolve(__dirname, 'music/index.html'),
        music_idk: resolve(__dirname, 'music/idk/index.html'),
      },
    },
  },
})