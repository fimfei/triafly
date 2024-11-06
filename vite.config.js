import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babel from '@rollup/plugin-babel';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'D:/apps/sampleapp/src/netdb-rspa/netdb_rspa/src'),
        },
    },
    plugins: [
        react(),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            extensions: ['.js', '.jsx'],
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: ["legacy-js-api"]
            },
        },
    },
    build: {
        lib: {
            entry: 'src/index.js', // Убедитесь, что путь правильный
            name: 'MyComponent',
            fileName: 'index',
            formats: ['cjs', 'es'],
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});