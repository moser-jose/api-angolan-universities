/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  test: {
    globals: true,
    root: './',
  },
  plugins: [
    tsConfigPaths(),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    swc.vite({
      module: { type: 'es6' },
    }),
  ],
});
