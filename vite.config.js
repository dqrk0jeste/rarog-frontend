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
        music: resolve(__dirname, 'music/index.html'),
        singleMusic: resolve(__dirname, 'music/single/index.html'),
        movie: resolve(__dirname, 'movies/index.html'),
        singleMovie: resolve(__dirname, 'movies/single/index.html'),
      },
    },
  },
})