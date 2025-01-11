import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
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